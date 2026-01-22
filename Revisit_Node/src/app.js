const express = require("express");
const connectDB = require("../config/database.js");
const User = require("../models/users.js");
const app = express();

// Post some data into the database
app.post("/signup", async (req, res) => {
  // creating the new instance of user model
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    email: "xerox12@gamil.com",
    password: "Xerox1@54321",
  });

  try {
    const x = await user.save(); // returns a promise
    console.log(x);
    res.send("User Added Successfully !!");
  } catch (err) {
    res.status(400).send("Error Saving the user: ", err.message);
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
