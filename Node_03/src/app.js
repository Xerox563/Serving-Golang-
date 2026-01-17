const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
const PORT = process.env.PORT || 3000;

const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { authenticateToken } = require("./middleware");

app.use(express.json());
app.use(cookieParser());

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save();
    res.send("User Added Successfully !!");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Login Route
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId });
    if (!user) {
      throw new Error("Email Id is not Present in the DB");
    }

    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      return res.status(400).send("Invalid Password Entered !!");
    }

    const token = await user.getJWT();

    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000), // 8 hours
    });

    res.send({ message: "Login Successful", token });
  } catch (err) {
    res.status(400).send("Something Went Wrong in the Login Route !!");
  }
});

app.get("/profile", authenticateToken, async (req, res) => {
  try {
    res.send(req.user);
  } catch (err) {
    res.status(400).send("Error Happened in /Profile !!");
  }
});

app.post("/sendConnectionRequest", authenticateToken, async (req, res) => {
  console.log("Sending a Connection Request");
  res.send("Connection Request Sent !!");
});

app.post("/addUser", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send("User Added to DB Successfully !!");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

connectDB()
  .then(() => {
    console.log("✅ Database Connected Successfully !!");
    app.listen(PORT, () => {
      console.log(`Server running on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database not Connected !!", err);
  });
