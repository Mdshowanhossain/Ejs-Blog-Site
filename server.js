const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 8000;
require('./Database/db')
require('dotenv').config();


const home = require('./routes/home');
const about = require('./routes/about');
const contact = require('./routes/contact');
const login = require('./routes/login');
const registration = require('./routes/registration');
const popularBlog = require('./routes/popular');
const postBlog = require('./routes/postBlog');
// const readBlog = require('./routes/read');
const admin = require('./routes/admin');


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser());
app.use(cookieParser());
app.set('view engine', 'ejs');

app.use('/', home)
app.use('/about', about)
app.use('/contact', contact)
// app.use('/login', login)
app.use('/registration', registration)
app.use('/popularblog', popularBlog)
app.use('/postBlog', postBlog)
// app.use('/readBlog', readBlog)
app.use('/admin', admin)


app.listen(PORT, () => {
    console.log(`Your server is Running at ${PORT}`)
})
