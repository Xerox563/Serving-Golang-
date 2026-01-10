const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const user = require("./models/user");
const app = express();
const PORT = process.env.PORT || 4444;
// console.log("MONGO_URI:", process.env.MONGO_URI);

app.use(express.json());
// It reads the json object converts into the js object and adds them to the request object : req: now req.body -> js object

// Post some data into the database
app.post("/signup", async (req, res) => {
  // creating the new instance of user model
  console.log(req.body);
  const user = new User(req.body);
  // dummy data
  //   const user = new User({
  //     firstName: "Virat",
  //     lastName: "Kohli",
  //     emailID: "xerox12@gamil.com",
  //     passwprd: "xerox1@54321",
  //   });
  try {
    await user.save(); // returns a promise
    res.send("User Added Successfully !!");
  } catch (err) {
    res.status(400).send("Error Saving the user: ", err.message);
  }
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

app.get("getUserByEmail", async (req, res) => {
  const userEmailId = req.body.emailId;
  try {
    console.log(userEmailId);
    const user = await User.find({ firstName: userEmailId });
    if (!user) {
      res.status(400).send("User not Found !!");
    } else {
      res.send(user);
      console.log(user);
    }
  } catch (err) {
    res.status(400).send("Error Saving the user: ", err.message);
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
    res.status(400).send("Error Saving the user: ", err.message);
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

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
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
