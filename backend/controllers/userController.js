const User = require("../models/userModel");
const { validationResult } = require("express-validator");

const loginUser = async (req, res) => {
  res.json({ message: "login user" });
};

const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.signup(email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
};
