const mongoose = require('mongoose');

const popularBlogSchema = new mongoose.Schema({

    category: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        default: ""
    },

}, { timestamps: true });

const PopularBlog = new mongoose.model('popularBlog', popularBlogSchema);

module.exports = PopularBlog;