// require needed modules
require('dotenv').config()
const express = require('express')

// initialize
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine ())

// import router from places
app.use('/places', require('./controllers/places'))

// homepage route
app.get('/', function (req, res) {
    res.render('home')
})

app.get('*', (rew, res) => {
    res.status(404).send ('<h1> 404 Page</h1>')
})

// listen
app.listen(process.env.PORT)

