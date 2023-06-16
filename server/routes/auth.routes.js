const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

// Signup user and return token
router.post("/signup", authController.signup);

// Login user and return token
router.post("/login", authController.login);

module.exports = router;
