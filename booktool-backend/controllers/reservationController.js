const Reservation = require("./../models/reservationModel");
const Message = require("./../models/messageModel");
const AppError = require("../utils/appError");

exports.createReservation = async (req, res, next) => {
  try {
    const {
      arrival,
      checkout,
      houseNumber,
      client,
      adults,
      children,
      amount,
      status,
    } = req.body;
    if (
      !arrival ||
      !checkout ||
      !houseNumber ||
      !client ||
      !adults ||
      !amount ||
      !status
    ) {
      return next(new AppError("Please provide all informations", 400));
    }
    const newReservation = await Reservation.create(req.body);
    const newMessage = await Message.create({
      title: "Dodano nową rezerwację",
      reservationId: newReservation._id,
      type: "added",
    });

    res.status(201).json({
      status: "success",
      newReservation,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!reservation) {
      return next(new AppError("Can not find reservation", 400));
    }

    if (req.body.status == "cancelled") {
      const message = await Message.create({
        title: "Anulowano rezerwację",
        reservationId: req.params.id,
        type: "cancelled",
      });
    }

    res.status(200).json({
      status: "success",
      reservation,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) {
      return next(new AppError("Can not find reservation", 400));
    }

    res.status(200).json({
      status: "success",
      reservation,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return next(new AppError("Can not find reservation", 400));
    }

    res.status(200).json({
      status: "success",
      reservation,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getReservations = async (req, res, next) => {
  try {
    const { page, limit, status } = req.query;
    let reservations;

    if (status == "all") {
      reservations = await Reservation.find({
        status: { $ne: "cancelled" },
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
    } else if (status == "cancelled") {
      reservations = await Reservation.find({
        status: "cancelled",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
    }

    console.log(reservations);
    if (!reservations) {
      return next(new AppError("Can not find reservations", 400));
    }

    res.status(200).json({
      status: "success",
      reservations,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getReservationSummary = async (req, res, next) => {
  try {
    // const summary = await Reservation.aggregate([
    //   { $group: { _id: "$status", count: { $sum: 1 } } },
    // ]);

    const todayReservation = await Reservation.count({
      arrival: Date.now(),
    });
    const allReservation = await Reservation.count();
    const cancelledReservation = await Reservation.count({
      status: "cancelled",
    });

    res.status(200).json({
      status: "success",
      todayReservation: todayReservation,
      allReservation: allReservation,
      cancelledReservation: cancelledReservation,
      messages: 0,
    });
  } catch (error) {
    console.log(error.message);
  }
};
