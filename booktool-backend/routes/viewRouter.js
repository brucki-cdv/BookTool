const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");

router.use(authController.protectRoute);
router.get("/", authController.checkUser);

module.exports = router;
