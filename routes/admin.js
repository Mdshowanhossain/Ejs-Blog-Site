const express = require('express');
const Blog = require('../models/blogSchema');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin');
});

router.get('/managedata', async (req, res) => {
    try {
        const adminData = await Blog.find();
        res.render('adminData', { adminData: adminData });
    } catch (err) {
        console.log(err.message)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const editBlog = await Blog.findById({ _id: req.params.id });
        res.render('adminEditBlog', { editBlog: editBlog });
    } catch (err) {
        console.log(err.message);
    }
});

router.post('/adminpost/:id', async (req, res) => {
    const { category, title, description } = req.body;
    try {
        await Blog.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                category: category,
                title: title,
                description: description,
            }
        });
        res.redirect('/admin')
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/managedata/delete/:id', async (req, res) => {
    try {
        await Blog.findByIdAndDelete({ _id: req.params.id });
        res.redirect('/admin/managedata');
    } catch (err) {
        console.log(err.message);
    }
})







module.exports = router;