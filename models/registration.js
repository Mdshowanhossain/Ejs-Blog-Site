const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

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
    tokens: [{
        token: {
            type: String,
            require: true
        }
    }]
}, { timestamps: true });

registrationSchema.methods.generateToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id, firstname: this.firstname, lastname: this.lastname }, process.env.JWT_SECRET, { expiresIn: '1hr' })
        // console.log(token, 'From Schema')
        this.tokens = this.tokens.concat({ token: token });
        return token;
    } catch (err) {
        console.log(err)
    }
}

const Registration = new mongoose.model('People', registrationSchema);

module.exports = Registration;