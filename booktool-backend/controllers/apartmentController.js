const Apartment = require("../models/apartmentModel");
const AppError = require("../utils/appError");

exports.createApartment = async (req, res, next) => {
  try {
    const {
      name,
      houseNumber,
      adultCost,
      childrenCost,
      maxSlots
    } = req.body;
    if (
      !name ||
      !houseNumber ||
      !adultCost ||
      !childrenCost ||
      !maxSlots
    ) {
      return next(new AppError("Please provide all informations", 400));
    }
    const newApartment = await Apartment.create(req.body);

    res.status(201).json({
      status: "success",
      newApartment,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getApartment = async (req, res, next) => {
  try {
    const apartment = await Apartment.findOne({ _id: req.params.id });
    if (!apartment) {
      return next(new AppError("Can not find that apartment", 400));
    }

    res.status(200).json({
      status: "success",
      apartment,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getApartments = async (req, res, next) => {
  try {
    const apartments = await Apartment.find();
    if (!apartments) {
      return next(new AppError("Can not find apartments", 400));
    }

    res.status(200).json({
      status: "success",
      apartments,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateApartment = async (req, res, next) => {
  try {
    const apartment = await Apartment.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    if (!apartment) {
      return next(new AppError("Can not update apartment", 400));
    }

    res.status(200).json({
      status: "success",
      apartment,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteApartment = async (req, res, next) => {
  try {
    const apartment = await Apartment.findOneAndDelete({
      houseNumber: req.params.id,
    });
    if (!apartment) {
      return next(new AppError("Can not delete this apartment", 400));
    }

    res.status(200).json({
      status: "success",
      apartment,
    });
  } catch (error) {
    console.log(error.message);
  }
};
