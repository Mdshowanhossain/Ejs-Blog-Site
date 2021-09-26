const express = require('express');
const bcrypt = require('bcrypt');

const Registration = require('../models/registration');


const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
})


router.post('/', async (req, res) => {
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
})
module.exports = router;