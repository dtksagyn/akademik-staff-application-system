const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/signup", userController.signUp); // Correct route path

// Signup route
router.post("/signup", userController.signUp);

// Login route
router.post("/login", userController.login);

module.exports = router;
