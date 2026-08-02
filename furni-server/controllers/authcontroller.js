const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { success, error } = require("../utils/responsehandler");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
const name = `${firstName} ${lastName}`

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return error(res, "User Already Exists", null, 400);
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return success(res, "User Registered Successfully", user, 201);
};

const logInUser = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return error(res, "Invalid Email or Password", null, 400);
  }
  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) {
    return error(res, "Invalid Email or Password", null, 400);
  }
  const jwttoken = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return success(res, "Login Successful", { jwttoken });
};

module.exports = { registerUser, logInUser };
