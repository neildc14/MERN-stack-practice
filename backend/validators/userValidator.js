const { body } = require("express-validator");

const signUpValidation = [
  body("email").isEmail().withMessage("Specify correct email address"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Must be at least 5 chars long"),
];

const loginValidation = [
  body("email")
    .isEmail()
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("Fill email address"),
  body("password").not().isEmpty().trim().escape().withMessage("Fill password"),
];

module.exports = { signUpValidation, loginValidation };
