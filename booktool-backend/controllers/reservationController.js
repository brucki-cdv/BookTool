const Reservation = require('./../models/reservationModel')

exports.createReservation = async (req, res, next) => {
    try {
        const newReservation = await Reservation.create(req.body);
        res.status(201).json({
            status: 'success added data',
            data: {
             newReservation
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}

exports.updateReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
          });
          res.status(200).json({
            status: 'success',
            data: {
              reservation
            }
          });
    } catch (error) {
        console.log(error.message)
    }
}

exports.deleteReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {
              reservation
            }
          });
    } catch (error) {
        console.log(error.message)
    }
}

exports.getReservation = async (req, res, next) => {
   try {
       const reservation = await Reservation.findById(req.params.id)
       res.status(200).json({
        status: 'success',
        data: {
          reservation
        }
      });
       
    } catch (error) {
        console.log(error.message)  
   }
}

exports.getReservations = async (req, res, next) => {
   try {
       const reservations = await Reservation.find()
       res.status(200).json({
        status: 'success',
        data: {
          reservations
        }
      });
   } catch (error) {
       console.log(error.message)
   }
}