const express = require("express");
const app = express();

// * ---------------- Case 1 -----------------
// one route can have the multiple route handlers
// app.use(
//   "/user",
//   (req, res) => {
//     console.log("user:1 called !!");
//     res.send("Handling the route user:1 !!");
//     // From here below the v8 engine will not read as soon as he sees the res.send it will return the response thats it .
//   },
//   () => {
//     console.log("user:2 called !!");
//     res.send("Handling the route user:2 !!");
//   }
// );
// only user 1 will be called

// * ---------------- Case 2 -----------------
// app.use(
//   "/users",
//   (req, res) => {
//     // This does not send any response , so it will hang around as it will not find res.send() for first route handle
//     // console.log("user:1 called !!");
//     // res.send("Handling the route user:1 !!");
//   },
//   () => {
//     console.log("user:2 called !!");
//     res.send("Handling the route user:2 !!");
//   }
// );
// only user 1 will be called

// * ---------------- Case 3 -----------------
// app.use(
//   "/users",
//   (req, res, next) => {
//     // First middleware
//     // console.log("user:1 called !!");
//     next();
//   },
//   (req, res) => {
//     // Second middleware
//     console.log("user:2 called !!");
//     res.send("Handling the route user:2 !!");
//   }
// );
// now user 2 will be called

// * ---------------- Case 4 -----------------
app.use(
  "/users",
  (req, res, next) => {
    // First middleware
    // console.log("user:1 called !!");
    res.send("Handling the route User:1 !!");
    next();
  },
  (req, res) => {
    // Second middleware
    console.log("user:2 called !!");
    res.send("Handling the route user:2 !!");
  }
);
// now user 1 will be called

app.listen(3000, () => {
  console.log("Server running on Port:3000 ");
});
