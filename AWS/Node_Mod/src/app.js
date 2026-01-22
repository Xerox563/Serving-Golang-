const express = require("express");
const app = express();
const { userAuth, adminAuth } = require("../middleware/authMiddleware");
app.get("/getConnections", userAuth, (req, res) => {
  // const token = "xyz";
  // const authorized = token === "xyzq";
  // if (authorized) {
  //   res.json({ message: "Data Fetched Successfully !!" });
  // } else {
  //   res.json({ message: "Data Failed to Fetched !!" });
  // }
  res.json({ message: "Data Fetched Successfully !!" });
});

app.use("/getPosts", adminAuth);
app.get("/getPosts", (req, res) => {
  // const token = "xyz";
  // const authorized = token === "xyz";
  // if (authorized) {
  // } else {
  //   res.json({ message: "Data Failed to Fetched !!" });
  // }
  res.json({ message: "Data Fetched Successfully !!" });
});

// Instead of using all these code again and again in each route even it can be reused , so better way is to write a middleware for this .

app.listen(3000, (err) => {
  console.log("Server Running on Port: 3000");
});
