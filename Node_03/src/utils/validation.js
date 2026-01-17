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

const validateProfileData = (req) => {
  // all keys of req.body should be present insid ethe allowedEditFields only then edit is possible ..
  const allowedEditFields = [
    "firstName",
    "lastName",
    "emailID",
    "about",
    "skills",
    "gender",
    "age",
  ];
  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );
  return isEditAllowed;
};

module.exports = { validateSignUpData, validateProfileData };
