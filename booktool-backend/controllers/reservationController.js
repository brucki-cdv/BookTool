const Reservation = require('./../models/reservationModel')
const AppError = require('../utils/appError')

exports.createReservation = async (req, res, next) => {
    try {
      const {arrival,  checkout,  houseNumber,  client,  adults, children, amount,  status } = req.body  
      if(!arrival || !checkout || !houseNumber || !client || !adults || !amount || !status) {
        return next(new AppError("Please provide all informations", 400));
    }
      const newReservation = await Reservation.create(req.body);
        
      res.status(201).json({
          status: 'success',
          newReservation
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

          if(!reservation){
            return next(new AppError('Can not find reservation', 400));
        }

        res.status(200).json({
            status: 'success',
            reservation
          });
    } catch (error) {
        console.log(error.message)
    }
}

exports.deleteReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id)
        if(!reservation){
          return next(new AppError('Can not find reservation', 400));
      }

      res.status(200).json({
          status: 'success',
          reservation
        });

    } catch (error) {
        console.log(error.message)
    }
}

exports.getReservation = async (req, res, next) => {
   try {
       const reservation = await Reservation.findById(req.params.id)
       
       if(!reservation){
            return next(new AppError('Can not find reservation', 400));
        }

        res.status(200).json({
            status: 'success',
            reservation
          });
       
    } catch (error) {
        console.log(error.message)  
   }
}

exports.getReservations = async (req, res, next) => {
   try {
       const reservations = await Reservation.find()
       if(!reservations){
        return next(new AppError('Can not find reservations', 400));
    }

    res.status(200).json({
        status: 'success',
        reservations
      });

   } catch (error) {
       console.log(error.message)
   }
}