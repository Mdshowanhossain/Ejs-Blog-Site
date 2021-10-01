const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth, async (req, res) => {
    try {
        res.clearCookie('jwt');
        await req.user.save();
        res.redirect('/registration/login');
    }
    catch (err) {
        console.log(err);
    }
});


module.exports = router;
