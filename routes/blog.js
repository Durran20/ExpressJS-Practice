const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'))
})

// Here all the blog posts will be displayed
router.get('/blog', (req, res) => {
    blogs.forEach(element => {
        // console.log(element.title)
        
    });
    res.sendFile(path.join(__dirname, '../templates/blogHome.html'))
})

module.exports = router // So we can access Blog.js from our server Index.js