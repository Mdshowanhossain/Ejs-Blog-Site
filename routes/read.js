const express = require('express');

const Blog = require('../models/blogSchema');

const router = express.Router();

// router.get('/', (req, res) => {
//     res.render('readpost');
// })


router.get('/readBlog/:id', (req, res) => {
    res.send('sohan')
})



// router.get('/readBlog/:id', async (req, res) => {
//     try {
//         const findBlog = await Blog.findById({ _id: req.params.id });
//         res.render('readpost', { findBlog: findBlog });
//         console.log(req.params.id)
//     } catch (err) {

//     }
// })


module.exports = router;