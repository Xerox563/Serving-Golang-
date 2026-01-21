// app.use(
//   "/users",
//   (req, res, next) => {
//     // First middleware
//     // console.log("user:1 called !!");
//     res.send("Handling the route User:1 !!");
//     next();
//   },
//   (req, res) => {
//     // Second middleware
//     console.log("user:2 called !!");
//     res.send("Handling the route user:2 !!");
//   }
// );
// now user 1 will be called
