const express = require("express");

const app = express();

app.get("/admin/getAllData", (req, res) => {
  // logic of checking if the request is authorized [if not middleware then we have to do like writing authorisation logic again and again !!]
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (isAdminAuthorized) {
    res.send("All data sent"); // by deafult status code : 200
  } else {
    res.status(401).send("Unauthorized request");
  }
});

app.get("/admin/deleteUser", (req, res) => {
  // logic of checking if the request is authorized
  res.send("Deleted User");
});

app.listen(4000, () => {
  console.log("Server running on Port: 4000");
});
