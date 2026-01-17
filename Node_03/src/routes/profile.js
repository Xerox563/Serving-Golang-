const express = require("express");

const profileRouter = express.Router();
const { authenticateToken } = require("../middleware");
profileRouter.get("/profile/view", authenticateToken, async (req, res) => {
  try {
    res.send(req.user);
  } catch (err) {
    res.status(400).send("Error Happened in /Profile !!");
  }
});

profileRouter.patch("/profile/edit",authenticateToken ,(req,res) => {
  
})

module.exports = profileRouter;
