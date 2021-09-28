const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

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
    user: {
        type: mongoose.Types.ObjectId,
        ref: "People"
    }

}, { timestamps: true });

const Blog = new mongoose.model('Blog', blogSchema);

module.exports = Blog;