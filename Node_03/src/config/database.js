require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.error("Database not Connected");
  }
};

// When Databse connection is successfully , only then server should listen at the port.
// Because it can be the case that the server has started working and the db connection is not successful and users are hitting the api request
module.exports = connectDB;
