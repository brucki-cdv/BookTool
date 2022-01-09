const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    arrival: {
        type: Date,
        require: true,
    },
    checkout: {
        type: Date,
        require: true,
    },
    houseNumber: {
        type: Number,
        require: true,
        min: 1,
        max: 20
    },
    client: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true,
        unique: true,
    },
    adults: {
        type: Number,
        min: 1,
        require: true,
    },
    children: {
        type: Number,
    },
    amount: {
        type: Number,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now()
    },
    modifiedAt: {
        type: Date,
        required: true,
        default: Date.now()
    }

})

const Reservation = mongoose.model('Reservation', reservationSchema)

module.exports = Reservation