const express = require('express');
const Blog = require('../models/blogSchema');

const router = express.Router();

router.get('/',async (req, res) => {

    try{

        const adminBlogData = await Blog.find();
        res.render('popularBlog',{adminBlogData:adminBlogData}); 
    }catch(err){
        res.send(err.message)
    }



})



module.exports  = router;