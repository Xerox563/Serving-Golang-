require("dotenv").config({ path: "../.env" });
const express = require("express");
const connectDB = require("./config/database");

const app = express();
console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB()
  .then(() => {
    console.log("✅ Database Connected Successfully !!");
    // Since DB connection is successful so listen to the user request by server .
    app.listen(8888, () => {
      console.log("Server running on Port: 8888");
    });
  })
  .catch((err) => {
    console.log("Database not Connected !!", err);
  });
