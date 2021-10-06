const jwt = require('jsonwebtoken');
const RegistrationSchema = require('../models/registration');


const auth = async (req, res, next) => {
    try {
        const token = await req.cookies.jwt;
        const verifyUser = await jwt.verify(token, process.env.JWT_SECRET);
        const user = await RegistrationSchema.findOne({ _id: verifyUser._id });
        req.token = token;
        req.user = user;
        next();
    } catch (err) {
        res.redirect('/registration/login');
        console.log(err);
    }
}
module.exports = auth;



// <=======ANOTHER METHODS========>

// const jwt = require('jsonwebtoken');
// const RegistrationSchema = require('../models/registration');


// const auth = async (req, res, next) => {
//     try {
//         const token = await req.headers.cookie.split('=')[1]

//         const verifyUser = await jwt.verify(token, process.env.JWT_SECRET);

//         const user = await RegistrationSchema.findOne({ _id: verifyUser._id });

//         // req.token = token;
//         // req.user = user;
//         next();
//     } catch (err) {
//         res.redirect('/registration/login');
//         console.log(err);
//     }
// }

// module.exports = auth













