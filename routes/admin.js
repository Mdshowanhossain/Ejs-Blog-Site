const express = require('express');
const Blog = require('../models/blogSchema');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin');
    console.log('I am ADMIN')
});

router.get('/manage', async (req, res) => {
    try {
        const adminData = await Blog.find();
        res.render('adminData', { adminData: adminData });
        console.log(adminData[0].createdAt)
    } catch (err) {
        console.log(err.message)
    }
});






module.exports = router;