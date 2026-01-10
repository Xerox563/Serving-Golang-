require("dotenv").config({ path: "../.env" });
const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
const PORT = process.env.PORT || 4444;
// console.log("MONGO_URI:", process.env.MONGO_URI);

// Post some data into the database
app.post("/signup", async (req, res) => {
  // creating the new instance of user model
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    emailID: "xerox12@gamil.com",
    passwprd: "xerox1@54321",
  });
  try {
    await user.save(); // returns a promise
    res.send("User Added Successfully !!");
  } catch (err) {
    res.status(400).send("Error Saving the user: ", err.message);
  }
});

connectDB()
  .then(() => {
    console.log("✅ Database Connected Successfully !!");
    // Since DB connection is successful so listen to the user request by server .
    app.listen(PORT, () => {
      console.log("Server running on Port: 8888");
    });
  })
  .catch((err) => {
    console.log("Database not Connected !!", err);
  });
