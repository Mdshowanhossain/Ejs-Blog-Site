const jwt = require('jsonwebtoken');
const RegistrationSchema = require('../models/registration');


const auth = async (req, res, next) => {
    try {
        const token = await req.headers.cookie.split('=')[1]

        const verifyUser = await jwt.verify(token, process.env.JWT_SECRET);

        const user = await RegistrationSchema.findOne({ _id: verifyUser._id });

        // req.token = token;
        // req.user = user;
        next();
    } catch (err) {
        res.redirect('/registration/login');
        console.log(err);
    }
}

module.exports = auth



















// const jwt = require('jsonwebtoken');

// const Register = require('../models/registration')

// const auth = async (req, res, next) => {

//     try {

//         console.log(req.Cookies);


//         console.log('SOHAN HOSSAIN')

//         // const token = req.cookies.jwt;

//         // const verifyUser = jwt.verify(token, process.env.JWT_SECRET)

//         // const user = Register.findOne({ _id: verifyUser._id });
//         // console.log(user)

//         next();

//         // console.log(token, 'From AUTH');
//     } catch (err) {
//         res.status(401).send(err.message)
//         console.log(err)
//     }
// }
// module.exports = auth;


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTUzODQ3MzAyNTVlNzM3OWI2N2QyMDgiLCJmaXJzdG5hbWUiOiJNb2hhbW1hZCIsImxhc3RuYW1lIjoiU29oYW4iLCJpYXQiOjE2MzI4NjMzNDcsImV4cCI6MTYzMjg2Njk0N30.Dm6W0U515v3CSHFdBhxhYSEEFHLAWS7Hk5_Zp01Vv5U
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTUzODQ3MzAyNTVlNzM3OWI2N2QyMDgiLCJmaXJzdG5hbWUiOiJNb2hhbW1hZCIsImxhc3RuYW1lIjoiU29oYW4iLCJpYXQiOjE2MzI4NjMzOTEsImV4cCI6MTYzMjg2Njk5MX0.IcjCVN6GL2omDL7xpH0rz517ZwXN7yZ6SV4IdwUiPgg