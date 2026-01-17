const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
const PORT = process.env.PORT || 8888;
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const {
  requestLogger,
  jsonErrorHandler,
  authenticateToken,
  jsonParser,
} = require("./middleware");
// console.log("MONGO_URI:", process.env.MONGO_URI);

// Middleware to log incoming requests (for debugging)
app.use(requestLogger);

// JSON parser with error handling
app.use(jsonParser);

// Error handler for JSON parsing errors (must be after jsonParser)
app.use(jsonErrorHandler);

app.use(cookieParser());
// It reads the json object converts into the js object and adds them to the request object : req: now req.body -> js object

// Signup Route
app.post("/signup", async (req, res) => {
  // creating the new instance of user model
  console.log(req.body);
  // dummy data
  //   const user = new User({
  //     firstName: "Virat",
  //     lastName: "Kohli",
  //     emailID: "xerox12@gamil.com",
  //     passwprd: "xerox1@54321",
  //   });
  try {
    validateSignUpData(req); // * This validates through our custom code writen in utils/validation.js

    // * Encrypt the password
    const { firstName, lastName, emailId, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    // Creating new instance of the user model : Only below fields needed for the signup
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save(); // returns a promise
    res.send("User Added Successfully !!");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { emailId, password } = req.body;
  try {
    console.log(emailId);
    console.log(password);
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Email Id is not Present in the DB");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid);
    if (isPasswordValid) {
      console.log("Login Successful !!");
      // Generate JWT token
      const token = await jwt.sign(
        { userId: user._id, emailId: user.emailId },
        "fwiuy3784y78ch3ufh98cu8kefjkcnkjncjkn",
        { expiresIn: "7d" }
      );
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000), // expires in 8 hrs
      });
      console.log(token);
      res.send({ message: "Login Successful", token: token });
    } else {
      console.log("Invalid Password Entered !!");
      res.send("Invalid Password Entered !!");
    }
  } catch (err) {
    res.status(400).send("Something Went Wrong in the Login Route !!");
  }
});

app.get("/profile", authenticateToken, async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    res.send(userData);
  } catch (err) {
    res.status(400).send("Error Happened in /Profile !!");
  }
});

app.post("/sendConnectionRequest", authenticateToken, async (req, res) => {
  // Sending a Connection Request
  console.log(req?.user?.firstName);
  console.log("Sending a Connection Request");
  res.send("Connection Request Sent !!");
});

app.post("/addUser", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added to DB Successfully !!");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get("/getUserByEmail", async (req, res) => {
  const userEmailId = req.body.emailId;
  try {
    console.log(userEmailId);
    const user = await User.find({ emailId: userEmailId });
    if (!user || user.length === 0) {
      res.status(400).send("User not Found !!");
    } else {
      res.send(user);
      console.log(user);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.get("/feed", async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      res.status(404).send("User not found !!");
    } else {
      res.send(user);
      console.log(user);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    console.log(userId);
    const user = await User.findByIdAndDelete(userId);
    res.send(user);
  } catch (err) {
    res.status(400).send("Something Went Wrong !!");
  }
});

app.patch("/user/:UserId", async (req, res) => {
  const userId = req.params.UserId;
  const data = req.body;
  try {
    const Allowed_updates = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      Allowed_updates.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update is not Allowed");
    }

    if (data?.skills?.length > 10) {
      console.log("More than 10 skills are not allowed !!");
      throw new Error("More than 10 skills are not allowed !!");
    }
    console.log(userId);
    const user = await User.findByIdAndUpdate(userId, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("User: Updated Successfully");
  } catch (err) {
    res.status(400).send("Something Went Wrong !!");
  }
});

// General error handler (must be last, after all routes)
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

connectDB()
  .then(() => {
    console.log("✅ Database Connected Successfully !!");
    // Since DB connection is successful so listen to the user request by server .
    app.listen(PORT, () => {
      console.log(`Server running on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database not Connected !!", err);
  });
