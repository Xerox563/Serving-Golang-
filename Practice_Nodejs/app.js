const express = require("express");
const app = express();

app.use(
  "/home",
  (req, res, next) => {
    console.log("Callack Fn1 Called !!");
    res.send("Hello From Amit1 !!");
    next();
  },
  (req, res, next) => {
    console.log("Callack Fn2 Called !!");
    next();
  },
  (req, res, next) => {
    console.log("Callback Fn3 called !!");
  },
);

app.use(
  "/users1",
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
  },
);
// now user 1 will be called [next proceeds to 2nd middleware, but since res.send() already sended response in first so 2nd will not work only console is printed ..]

app.use(
  "/users2",
  (req, res, next) => {
    // First middleware
    // console.log("user:1 called !!");
    res.send("Handling the route User:1 !!");
    console.log("USer 1 called !!");
    next();
    res.send("Handling the route User:1 !!");
  },
  (req, res) => {
    // Second middleware
    console.log("user:2 called !!");
    res.send("Handling the route user:2 !!");
  },
);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server Running on Port: 3000`);
  }
});
