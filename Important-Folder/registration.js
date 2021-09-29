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
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashPassword,
            mobileNumber: mobileNumber
        })
        const newUser = await users.save();
        res.redirect('/registration/login')


        const payload = {
            users: {
                _id: newUser._id,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
            }
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1hr' });
        console.log(token)

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
            res.redirect('/')
        }



        payload = {
            user: {
                _id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
            }
        }


        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1hr' })


        console.log(token, 'From Login');


    }
    catch (err) {
        console.log(err.message);
        res.send(err);
    }
});

















module.exports = router;