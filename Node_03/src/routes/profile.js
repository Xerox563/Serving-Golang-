const express = require("express");

const profileRouter = express.Router();
const { authenticateToken } = require("../middleware");
const { validateProfileData } = require("../utils/validation");
profileRouter.get("/profile/view", authenticateToken, async (req, res) => {
  try {
    res.send(req.user);
  } catch (err) {
    res.status(400).send("Error Happened in /Profile !!");
  }
});
// Update all fields except Password
profileRouter.patch("/profile/edit", authenticateToken, async (req, res) => {
  // first we will get the user
  // then we will check wheather the field we want to edit exists in db or not
  // If field exists then get the data and change the data in the db
  // If field does not exists , means whatever the field we want to edit does not exists in the db we will simple throw error that this field that you want to edit does not exists !!
  // then after partial changing the fields update the user in db.

  try {
    if (!validateProfileData(req)) {
      throw new Error("Invalid Edit Request !!");
    }
    const LoggedInuser = req?.user;
    console.log("Prevoius Data: ", LoggedInuser);

    // Updating all the fields data
    Object.keys(req.body).forEach(
      (key) => (LoggedInuser[key] = req?.body[key])
    );
    await LoggedInuser.save();
    console.log("Prevoius Data: ", LoggedInuser);
    res.json({
      message: `{LoggedInuser[firstName]}, Your Profile Updated Successfully !!`,
      data: LoggedInuser,
    });
    // res.send(`{LoggedInuser[firstName]}, Your Profile Updated Successfully !!`);
  } catch (err) {
    console.log("Error Message: ", err.message);
  }
});

// Update Password
profileRouter.patch("/profile/password", (req, res) => {});

module.exports = profileRouter;
