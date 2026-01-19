const express = require("express");

const requestRouter = express.Router();
const { authenticateToken } = require("../middleware");
requestRouter.post(
  "/sendConnectionRequest",
  authenticateToken,
  async (req, res) => {
    console.log("Sending a Connection Request");
    res.send("Connection Request Sent !!");
  },
);

module.exports = requestRouter;
