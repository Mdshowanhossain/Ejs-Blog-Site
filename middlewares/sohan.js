const jwt = require('jsonwebtoken');
const RegistrationSchema = require('../models/registration');


const sohan = async (req, res, next) => {
    try {
        const admin = await RegistrationSchema.findOne({ role: 'admin' });
        if(admin){
            next();
        }
        else{
            res.status(500).send('You Are Not ADMIN');
        }

    } catch (err) {
        res.redirect('/registration/login');
        console.log(err);
    }
}
module.exports = sohan;
