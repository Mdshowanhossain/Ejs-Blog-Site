const express = require('express');
const bcrypt = require('bcrypt');
const Registration = require('../models/registration');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('registration');
})
router.get('/login', (req, res) => {
    res.render('login');
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
        res.redirect('/registration/login')
        // res.render('login')
    } catch (err) {
        console.log(err.message);
    }
});


router.post('/login/us', async (req, res) => {
    const { email, password } = req.body;
    try {
        const findPeople = await Registration.findOne({ email: email });
        const matchPassword = await bcrypt.compare(password, findPeople.password);
        if (matchPassword === true) {
            res.redirect('/')
        } else {
            res.send('User Not Authenticated');
        }
    }
    catch (err) {
        console.log(err.message);
        res.send(err);
    }
});

















module.exports = router;