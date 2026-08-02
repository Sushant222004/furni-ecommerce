const jwt = require("jsonwebtoken");
const { success, error } = require("../utils/responsehandler");
const User = require("../models/user");

const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return error(res, "No Token Provided", null, 401);
    }
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");
    req.user = user;
  } catch (err) {
    return error(res, "Invalid Token", null, 401);
  }
  next();
};

module.exports = protect;
