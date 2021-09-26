const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({

    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    mobilenumber: {
        mobileNumber: Number,
    },
}, { timestamps: true });

const Registration = new mongoose.model('people', registrationSchema);

module.exports = Registration;