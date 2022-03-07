const mongoose = require("mongoose");

const apartmentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
  },
  houseNumber: {
    type: Number,
    require: true,
  },
  adultCost: {
    type: Number,
    require: true,
  },
  childrenCost: {
    type: Number,
    require: true,
  },
  maxSlots: {
    type: Number,
    require: true,
  },
});

const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;
