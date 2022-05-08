// require needed modules
require('dontenv').config()
const express = require('express')

// initialize
const app = express()

// import router from places
app.use('/places', require('./controllers/places'))

// homepage route
app.get('/', function (req, res) {
    res.send('hello')
})

app.get('*', (rew, res) => {
    res.status(404).send ('<h1> 404 Page</h1>')
})

// listen
app.listen(process.env.PORT)

