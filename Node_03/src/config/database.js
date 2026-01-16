const mongoose = require("mongoose");

// MongoDB connection URI - replace with your actual MongoDB URI
const MONGO_URI =
  "mongodb+srv://amit07:M9qFplrC5GBEw3MS@cluster0.4gb6h.mongodb.net/DevTinder"; // Replace with your MongoDB URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (err) {
    console.error("Database not Connected");
  }
};

// When Databse connection is successfully , only then server should listen at the port.
// Because it can be the case that the server has started working and the db connection is not successful and users are hitting the api request
module.exports = connectDB;
