const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/profile", userController.getUserProfile);
router.post("/", userController.getAllUsers);

module.exports = router;