const express = require('express');
const multer = require('multer');
// const PopularBlog = require('../models/popularBlog/popularBlog');
const PopularBlog = require('../../models/popularBlog/popularBlog');
const { route } = require('../home');

const router = express.Router();



router.get('/AdminBlog/post', (req, res) => {
    res.render('./admin/postBlog');
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/popularBlogImages')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3
    }
});


router.get('/AdminBlog', async (req, res) => {
    try {
        const findPopularBlog = await PopularBlog.find();
        res.render('popularBlog', { findPopularBlog: findPopularBlog });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/AdminBlog/post', upload.single('image'), async (req, res) => {
    try {
        const { category, title, description, image } = req.body;
        const adminblog = await new PopularBlog({
            category,
            title,
            description,
            image: req.file.filename
        });
        const postSave = await adminblog.save();
        console.log(postSave)
        res.redirect('/admin')
    }
    catch (err) {
        res.status(500).send(err.message);
    };
})

router.get('/:id', async (req, res) => {
    try {
        const findPopularBlog = await PopularBlog.findById({ _id: req.params.id });
        res.render('./admin/singlePopularBlog', { findPopularBlog: findPopularBlog });
    } catch (err) {
        console.log(err)
    }
})

router.get('/AdminBlog/:id', async (req, res) => {
    try {
        const findBlog = await PopularBlog.findById({ _id: req.params.id });
        res.render('./admin/popularEdit', { findBlog: findBlog });
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/', (req, res) => {
    console.log(req.body);
})


router.get('/AdminBlog/delete/:id', (req, res) => {
    console.log(req.params.id)
})




module.exports = router;