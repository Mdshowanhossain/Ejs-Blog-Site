const express = require('express');
const router = express.Router();



router.get('/adminLogin', (req, res) => {
    res.render('adminLogin');
});

router.get('/admin', (req, res) => {
    res.redirect('/adminLogin');
});





module.exports = router;