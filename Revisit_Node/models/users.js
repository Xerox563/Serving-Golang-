const mongoose = require("mongoose");
// A Mongoose Schema defines the shape/structure of documents inside a MongoDB collection.
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
    },
    lastName: {
      type: String,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // Minimum length
          if (value.length < 6) {
            throw new Error("Password must be at least 6 characters");
          }

          // Must contain at least one uppercase letter
          if (!/[A-Z]/.test(value)) {
            throw new Error(
              "Password must contain at least one uppercase letter",
            );
          }

          // Must contain at least one digit
          if (!/\d/.test(value)) {
            throw new Error("Password must contain at least one number");
          }

          // Must contain at least one lowercase letter
          //   if (!/[a-z]/.test(value)) {
          //     throw new Error(
          //       "Password must contain at least one lowercase letter",
          //     );
          //   }

          // Must contain at least one special character
          //   if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
          //     throw new Error(
          //       "Password must contain at least one special character",
          //     );
          //   }
        },
        message: "Password validation failed",
      },
    },

    age: {
      type: Number,
      min: 18,
      max: 43,
    },
    gender: {
      type: String,
      enum: ["male", "female"], // gender can be only male or female
    },
  },
  { timestamps: true }, // adds created at and updated at
);
module.exports = mongoose.model("User", userSchema);

/* 
required,unique,trim,lowercase,uppercase
min,max,,default:"user",minlength,maxlength,
*/
