const express = require('express');
const router = express.Router();
const reservationController = require('./../controllers/reservationController');
const authController = require('./../controllers/authController');

router.use(authController.protectRoute)

router.get('/', reservationController.getReservations)
router.get('/summary', reservationController.getReservationSummary);
router.get('/:id', reservationController.getReservation)
router.post('/', reservationController.createReservation)
router.delete('/:id', reservationController.deleteReservation)
router.patch('/:id', reservationController.updateReservation)

module.exports = router;