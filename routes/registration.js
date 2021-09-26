const express = require('express');
const bcrypt = require('bcrypt');
const Registration = require('../models/registration');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('registration');
})

router.post('/user', async (req, res) => {
    const { firstname, lastname, email, password, mobileNumber } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    try {
        const saveUserData = await new Registration({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashPassword,
            mobileNumber: mobileNumber
        })
        const saveData = await saveUserData.save();
        res.redirect('/login')
    } catch (err) {
        console.log(err.message);
    }
})

module.exports = router;