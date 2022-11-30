const { body } = require("express-validator");

const signUpValidation = [
  body("email").isEmail().withMessage("Specify correct email address"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Must be at least 5 chars long"),
];

module.exports = { signUpValidation };
