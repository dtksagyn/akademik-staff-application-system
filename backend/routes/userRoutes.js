const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/signup", userController.signUp);
router.get("/login", userController.login);

// Signup route
// router.post("/signup", userController.signUp);

// Login route

module.exports = router;
