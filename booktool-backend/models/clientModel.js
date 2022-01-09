const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 10
    },
    lastName: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 10
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phoneNumber: {
        type: String,
        require: true,
        unique: true,
        minLength: 9,
        maxLength: 9
    }
})

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
