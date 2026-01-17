const validator = require("validator");
const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("Name is not Valid !!");
  } else if (
    firstName.length < 4 ||
    firstName.length > 50 ||
    lastName.length < 4 ||
    lastName.length > 50
  ) {
    throw new Error("Entered Name is not Valid !!");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Entered Password is not Strong !!");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Entered Email is not Valid !!");
  }
};

module.exports = {
  validateSignUpData,
};
