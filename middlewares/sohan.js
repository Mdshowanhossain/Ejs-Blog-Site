const jwt = require('jsonwebtoken');
const RegistrationSchema = require('../models/registration');


const sohan = async (req, res, next) => {
    try {
        // const token = await req.cookies.jwt;
        // const verifyUser = await jwt.verify(token, process.env.JWT_SECRET);

        const admin = await RegistrationSchema.findOne({ role: 'admin' });
        console.log(admin);

        // const user = await RegistrationSchema.findOne({ _id: verifyUser._id });
        // req.token = token;
        // req.user = user;
        next();
    } catch (err) {
        res.redirect('/registration/login');
        console.log(err);
    }
}
module.exports = sohan;
