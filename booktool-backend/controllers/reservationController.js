const Reservation = require("./../models/reservationModel");
const Message = require("./../models/messageModel");
const Client = require("./../models/clientModel");
const AppError = require("../utils/appError");
const moment = require("moment");

exports.createReservation = async (req, res, next) => {
  try {
    const {
      arrival,
      checkout,
      apartment,
      adults,
      children,
      amount,
      status,
      firstName,
      lastName,
      phoneNumber,
      email,
    } = req.body;
    if (
      !arrival ||
      !checkout ||
      !apartment ||
      !adults ||
      !amount ||
      !status ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email
    ) {
      return next(new AppError("Please provide all information", 400));
    }

    let client;

    client = await Client.findOne({
      $or: [{ email: email }, { phoneNumber: phoneNumber }],
    });
    if (!client) {
      client = await Client.create({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
      });
    }

    console.log(client);

    const newReservation = await Reservation.create({
      arrival: new Date(arrival),
      checkout: new Date(checkout),
      apartment: apartment,
      client: client._id,
      adults: adults,
      children: children,
      amount: amount,
      status: status,
    });

    res.status(201).json({
      status: "success",
      newReservation,
    });

    const newMessage = await Message.create({
      title: "Dodano nową rezerwację",
      reservationId: newReservation._id,
      type: "added",
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateReservation = async (req, res, next) => {
  try {
    const {
      arrival,
      checkout,
      apartment,
      client,
      adults,
      children,
      amount,
      status,
      firstName,
      lastName,
      phoneNumber,
      email,
    } = req.body;

    if (
      !arrival ||
      !checkout ||
      !apartment ||
      !client ||
      !adults ||
      !amount ||
      !status ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email
    ) {
      return next(new AppError("Please provide all information", 400));
    }

    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      {
        arrival: arrival,
        checkout: checkout,
        apartment: apartment,
        adults: adults,
        children: children,
        amount: amount,
        status: status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!reservation) {
      return next(new AppError("Can not updated reservation", 400));
    }

    if (status == "cancelled") {
      const message = await Message.create({
        title: "Anulowano rezerwację",
        reservationId: req.params.id,
        type: "cancelled",
      });
    }

    const updatedClient = await Client.findByIdAndUpdate(client, {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
    });

    if (!updatedClient) {
      return next(new AppError("Can not updated client", 400));
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
    const reservation = await Reservation.findById(req.params.id)
      .populate("apartment")
      .populate("client");

    if (!reservation) {
      return next(new AppError("Can not find reservation", 400));
    }

    res.status(200).json({
      status: "success",
      reservation: reservation,
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
        .populate("apartment")
        .limit(limit * 1)
        .skip((page - 1) * limit);
    } else if (status == "cancelled") {
      reservations = await Reservation.find({
        status: "cancelled",
      })
        .populate("apartment")
        .limit(limit * 1)
        .skip((page - 1) * limit);
    }

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
    let currentDate = moment().utcOffset(0);
    currentDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    currentDate.toISOString();
    currentDate.format();
    console.log(currentDate);

    const todayReservation = await Reservation.count({
      arrival: currentDate,
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
