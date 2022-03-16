const express = require('express')
var exphbs  = require('express-handlebars');
const path = require('path')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Serving a Static Folder
app.use(express.static(path.join(__dirname, "static"))) // This gets served on root end point

app.use('/', require(path.join(__dirname, 'routes/blog.js')))

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`)
})