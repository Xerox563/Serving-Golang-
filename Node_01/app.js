const express = require("express");

const app = express();

// app.get("/user/:user:Id", (req, res) => {
//   console.log(req.params);
//   res.send({ fName: "Amit", lNAme: "Gangwar" });
// });

app.listen(7777, () => {
  console.log("Server is running Successfully on Port 7777");
});
