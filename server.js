const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// Routes
const apiRoute = require('./routes/api.route')

const app = express()

// Avoid the Same Origin Policy thing
app.use(cors())

// Connect the backend code with the database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
let db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error:'))
db.once('open', () => console.log('Connected to the database'))

// Parse the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Index route
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')) );

// Call routes
app.use('/api/shorturl', apiRoute)

// Init the backend
app.listen(process.env.PORT, () => console.log(`API listening on port ${process.env.PORT}`))