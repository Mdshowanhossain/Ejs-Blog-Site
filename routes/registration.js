const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
        const users = await new Registration({
            firstname,
            lastname,
            email,
            password: hashPassword,
            mobileNumber
        });
        const token = await users.generateToken();

        res.cookie('jwt', token, {
            expires: new Date(Date.now() + 7200000),
        });

        const newUser = await users.save();
        res.redirect('/registration/login')

    } catch (err) {
        console.log(err.message);
    }
});

router.post('/login/user', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Registration.findOne({ email: email });

        if (!user) {
            res.status(400).json({ error: 'Wrong Credentials' })
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if (!matchPassword) {
            res.status(400).json({ error: 'Wrong Credentials' })
        }

        if (matchPassword === true) {
            const token = await user.generateToken();
            res.cookie('jwt', token, {
                expires: new Date(Date.now() + 7200000),
            });
            res.redirect('/')
        }
    }
    catch (err) {
        console.log(err.message);
        res.send(err);
    }
});

module.exports = router;