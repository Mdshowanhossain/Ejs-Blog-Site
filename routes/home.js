const express = require('express');

const Blog = require('../models/blogSchema');


const router = express.Router();

router.get('/readBlog', (req, res) => {
    res.render('readpost');
})



router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.render('home', { blogs: blogs })
    }
    catch (err) {
        console.log(err)
    }
});

// const routers = (id = "") => {
//     return function (req, res, next) {
//         res.locals.dc = id;
//         next();
//     }
// }



router.get('/read/:id', async (req, res) => {
    try {
        const findBlog = await Blog.findById({ _id: req.params.id });
        console.log(findBlog)
        res.render('readpost', { findBlog: findBlog });
    } catch (err) {
        console.log(err.message);
    }
})






module.exports = router;