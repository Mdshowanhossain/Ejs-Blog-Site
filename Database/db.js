const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ourBlog')
    .then((res) => {
        console.log('Your Database Connection Succesful')
    })
    .catch((err) => {
        console.log(err)
    })