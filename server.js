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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/', home)
app.use('/about', about)
app.use('/contact', contact)
app.use('/login', login)
app.use('/registration', registration)
app.use('/popularblog', popularBlog)
app.use('/postBlog', postBlog)
// app.use('/readBlog', readBlog)


app.listen(PORT, () => {
    console.log(`Your server is Running at ${PORT}`)
})



// <%- include ('./partials/navbar.ejs') %>


//     <div class="card mb-3">
//         <img src="/uploads/blogImages/<%= findBlog.image %>" alt="" class="card-img-top read-blog" alt="...">

//         <div class="d-flex justify-between mt-3 text-center">
//             <p class="text-muted  mx-auto">
//                 <small class="">Last updated: <%= findBlog.updatedAt %></small>
//             </p>
//             <p class="text-muted  mx-auto">
//                 <small class="">Category: <%= findBlog.category %></small>
//             </p>
//         </div>
//         <div class="card-body">
//             <h5 class="card-title text-center">
//                 <%= findBlog.title %>
//             </h5>
//             <p class="text-center">
//                 <%= findBlog.description %>
//             </p>
//         </div>
//     </div>
//     <%- include ('./partials/footer.ejs') %>