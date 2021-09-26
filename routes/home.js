const express = require('express');

const Blog = require('../models/blogSchema');


const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/', async (req, res) => {

    try {
        const blogs = [
            { category: 'sohan', title: 'sohan', description: 'sohan', },
            { category: 'sohan', title: 'sohan', description: 'sohan', },
            { category: 'sohan', title: 'sohan', description: 'sohan', },
            { category: 'sohan', title: 'sohan', description: 'sohan', },
            { category: 'sohan', title: 'sohan', description: 'sohan', },
        ]
        res.render('home', { blogs: blogs })


    } catch (err) {
        console.log(err)
    }



})










// router.get('/all', async (req, res) => {
//     try {
//         const blog = await Blog.find()

//         if (blog) {
//             res.render('home', { blog: blog });
//         } else {
//             res.status(500).send('Not Found');
//         }
//     }
//     catch (err) {
//         console.log(err);
//     }
// });



module.exports = router;