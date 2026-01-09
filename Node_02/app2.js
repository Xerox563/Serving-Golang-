const express = require("express");

const app = express();

// handle auth middleware for all request[get,post and all] then use "use/all" else use get or post whatever required,  : for all which starts with "/admin"
app.use("/admin", (req, res, next) => {
  // auth logic here
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
});
// above will be called for all "/admin" routes ,
// we will reach "/admin/getAllData" here only if user is authenticated, as all will pass through "/admin" middleware okk

app.get("/admin/getAllData", (req, res) => {
  // logic of checking if the request is authorized [if not middleware then we have to do like writing authorisation logic again and again !!]
  //   const token = "xyz";
  //   const isAdminAuthorized = token === "xyz";
  //   if (isAdminAuthorized) {
  //     res.send("All data sent"); // by deafult status code : 200
  //   } else {
  //     res.status(401).send("Unauthorized request");
  //   }
  //*  with middleware
  res.send("All data sent");
});

//  For this middleware will not be called , beacuse its just /users not starting with /admin
app.get("/users", (req, res) => {
  res.send("User Data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  // logic of checking if the request is authorized
  res.send("Deleted User");
});

app.listen(4000, () => {
  console.log("Server running on Port: 4000");
});
