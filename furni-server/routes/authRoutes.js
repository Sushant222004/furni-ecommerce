const express = require("express");
const router = express.Router();
const { registerUser, logInUser } = require("../controllers/authController");
const {getProfile} = require("../controllers/userController")
const protect = require("../middleware/authMiddleware")

router.post("/register", registerUser);

router.post("/login", logInUser);

router.get("/profile", protect , getProfile)
module.exports = router;