// require needed modules
const express = require('express')

// initialize
const app = express()

// homepage route
app.get('/', function (req, res) {
    res.send('hello')
})

// listen
app.listen(3000)

