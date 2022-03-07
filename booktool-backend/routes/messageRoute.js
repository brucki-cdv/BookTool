const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const messageController = require("../controllers/messageController");

router.use(authController.protectRoute);
router.get("/", messageController.getMessages);

module.exports = router;
