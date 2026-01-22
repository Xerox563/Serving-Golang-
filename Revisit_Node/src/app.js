const express = require("express");
const connectDB = require("../config/database.js");
const User = require("../models/users.js");
const app = express();

app.use(express.json());

// Post some data into the database
app.post("/signup", async (req, res) => {
  console.log(req.body);
  // creating the new instance of user model
  //   const user = new User({
  //     firstName: "Virat",
  //     lastName: "Kohli",
  //     email: "xerox12@gamil.com",
  //     password: "Xerox1@54321",
  //   });
  const user = new User(req.body);

  try {
    const x = await user.save(); // returns a promise
    console.log(x);
    res.send("User Added Successfully !!");
  } catch (err) {
    res.status(400).send("Error Saving the user: ", err.message);
  }
});

app.get("/getUserByEmail", async (req, res) => {
  try {
    console.log(req.query);
    const userEmail = req?.query?.email;

    // Validate email
    if (!userEmail) {
      return res.status(400).send("Email is required");
    }

    // Find user
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Return user
    return res.status(200).json({
      message: "User fetched successfully",
      user,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.delete("/deleteUser", async (req, res) => {
  const userID = req.body.userId;
  try {
    console.log(userID);
    const user = await User.findByIdAndDelete(userID);
    res.send(user);
  } catch (err) {
    res.status(200).send("Cant Delete the User !!");
  }
});

app.patch("/updateUser", async (req, res) => {
  const userID = req.body.userId;
  try {
    console.log(userID);
    const user = await User.findByIdAndUpdate(userID);
    res.send(user);
  } catch (err) {
    res.status(200).send("Cant Delete the User !!");
  }
});

app.get("/feed", async (req, res) => {
  // get all users
  const users = await User.find({});
  console.log(users);
  if (!users) {
    res.status(400).send("No user in DB !!");
  } else {
    // console.log("All Users Fetched from DB !!", users);
    res.status(200).json({
      message: "Users Fetched from DB !!",
      users,
    });
  }
});

connectDB()
  .then(() => {
    console.log("DB Connected Successfully !!");
    // Since DB connection is successful so listen to the user request by server .
    app.listen(3000, () => {
      console.log("Server running on Port: 3000");
    });
  })
  .catch((err) => {
    console.log("DB not Connected !!");
  });
