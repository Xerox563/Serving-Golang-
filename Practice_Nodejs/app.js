const express = require("express");
const app = express();

app.use(express.json()); // Json Parsing

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
/*
req.body - Data sent by the client in a POST, PUT, or PATCH request.
:: When to use?
When we send:
- Form data
- JSON data
- Login info
- Registration info
*/
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login Successful !!");
});

/* 
To fetch the Dynamic values in the URL.
When to use?
Fetching:
User by ID
 */
app.get("/x/:id", (req, res) => {
  console.log(req.params);
  res.send("req.params !!");
});

/* req.query : Data sent after '?' in the url */
app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("req.query !!");
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server Running on Port: 3000`);
  }
});
