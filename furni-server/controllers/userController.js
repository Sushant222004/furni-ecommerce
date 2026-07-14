const { success,error } = require("../utils/responsehandler");

const getProfile = (req, res) => {
  return success(res, "Profile fetched successfully", req.user);
};

module.exports = { getProfile };