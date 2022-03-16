const express = require('express')
const path = require('path')

const blogs = require('../data/blogData')   // Getting the data from blogData.js

const router = express.Router()

// Serves Homepage(index.html) from views folder
router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../views/index.html'))

    // Using handlebars
    res.render('home')
})

// Here all the blog posts will be displayed
// Serves all the blog data from blogDaata.js file in data folder
router.get('/blog', (req, res) => {
    // blogs.forEach(element => {
    //     console.log(element.title)
    // });
    // res.sendFile(path.join(__dirname, '../views/blogHome.html'))
    res.render('blogHome', {
        blogs: blogs
    })
})

// To display single blog post
router.get('/blogpost/:slug', (req, res) => {
    // console.log(req.params.slug)

    // Display only that post which is in the URL slug
    blogPost = blogs.filter((element) => {
        return element.slug == req.params.slug
    })
    console.log(blogPost)
    res.sendFile(path.join(__dirname, '../views/blogPost.html'))
})

module.exports = router // So we can access Blog.js from our server Index.js