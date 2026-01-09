const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  // Logic of db call for user Data
  throw new Error("Error Happened");
  res.send("USer Data Sent !!");
});

// order of below error middleware matters
app.use("/", (err, req, res, next) => {
  if (err) {
    // log your error
    console.log(err.message);
    res.status(500).send("Something went Wrong !!");
  }
});

app.listen(4000, () => {
  console.log("Server running on Port: 4000");
});
