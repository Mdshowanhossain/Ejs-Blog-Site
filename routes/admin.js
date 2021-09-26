const express = require('express');

const Blog = require('../models/blogSchema');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin');
});


router.get('/data', async (req, res) => {
    try {
        const findAdminData = await Blog.find();
        res.render('adminData', { findAdminData: findAdminData })
        // console.log(AdminData)
    } catch (err) {
        res.send(err.message)
    }
});

module.exports = router;