const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;
require('./Database/db')


const home = require('./routes/home');
const about = require('./routes/about');
const contact = require('./routes/contact');
const login = require('./routes/login');
const registration = require('./routes/registration');
const popularBlog = require('./routes/popular');
const postBlog = require('./routes/postBlog');
const readBlog = require('./routes/read');


app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.use('/', home)
app.use('/about', about)
app.use('/contact', contact)
app.use('/login', login)
app.use('/registration', registration)
app.use('/popularblog', popularBlog)
app.use('/postBlog', postBlog)
app.use('/readBlog', readBlog)


app.listen(PORT, () => {
    console.log(`Your server is Running at ${PORT}`)
})