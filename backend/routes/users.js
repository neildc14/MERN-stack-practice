const express = require("express");
const router = express.Router();
const { loginUser, signUpUser } = require("../controllers/userController");
const { signUpValidation } = require("../validators/userValidator");

router.post("/login", loginUser);

router.post("/signup", signUpValidation, signUpUser);

module.exports = router;
