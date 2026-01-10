const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 50,
    },
    lastName: {
      type: String,
    },
    emailId: {
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email address !!");
        }
      },
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    // validate only works when uu create or add new data , not on patch
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Invalid Gender !!");
        }
      },
    },
    photoUrl: {
      type: String,
      validate(value) {
        if (validator.isURL(value)) {
          throw new Error("Invalid Photo URL address !!");
        }
      },
    },
    about: {
      type: String,
      default: "This is Default Bio of the User !!",
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

// export by creating model
module.exports = mongoose.model("User", userSchema);
