const jwt = require('jsonwebtoken');
const RegistrationSchema = require('../models/registration');


const adminAuth = async (req, res, next) => {
    try {
        const token = await req.cookies.jwt;
        const verifyUser = await jwt.verify(token, process.env.JWT_SECRET);
        const user = await RegistrationSchema.findOne({ _id: verifyUser._id });

        if (user) {
            const adminFind = await RegistrationSchema.find({ role: 'admin' });

            if (!adminFind) {
                // console.log(adminFind);
                res.redirect('/registration/login')
            }
        }

        req.token = token;
        req.user = user;
        next();

    } catch (err) {
        res.redirect('/registration/login');
        // console.log(err)
    }
};
module.exports = adminAuth;