const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('HEllo I am FROm ADMIN');
})

module.exports = router;