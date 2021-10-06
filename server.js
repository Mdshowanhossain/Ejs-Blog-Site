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
const registration = require('./routes/registration');
const postBlog = require('./routes/postBlog');
const admin = require('./routes/admin/admin');
const logout = require('./routes/authLog');




const adminLogin = require('./routes/adminLogin');




app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser());
app.use(cookieParser());
app.set('view engine', 'ejs');

app.use('/', home);
app.use('/about', about);
app.use('/contact', contact);
app.use('/registration', registration);
app.use('/postBlog', postBlog);
app.use('/admin', admin);
app.use('/logout', logout);





// app.use('/', (req, res) => {
//     res.render('adminLogin')
// })



app.get('/popularblog', (req, res) => {
    res.render('popularBlog');
})












app.listen(PORT, () => {
    console.log(`Your server is Running at ${PORT}`)
})
