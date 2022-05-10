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
    apartment: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true,
        ref: 'Apartment',
    },
    client: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true,
        ref: 'Client',
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
        enum: ['paid', 'waiting', 'cancelled']
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