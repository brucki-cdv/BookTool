const express = require("express");
const router = express.Router();
const apartmentController = require("../controllers/apartmentController");
const authController = require("../controllers/authController");

router.use(authController.protectRoute);

router.get("/", apartmentController.getApartments);
router.get("/:id", apartmentController.getApartment);
router.post("/", apartmentController.createApartment);
router.delete("/:id", apartmentController.deleteApartment);
router.patch("/:id", apartmentController.updateApartment);

module.exports = router;
