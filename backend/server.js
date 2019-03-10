import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'

// Routes
import apiRoute from './routes/api.route'

// Set the path of the env file
dotenv.config({path: './.env.development'})

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

// Call routes
app.use('/api/shorturl', apiRoute)

// Init the backend
app.listen(process.env.PORT, () => console.log(`API listening on port ${process.env.PORT}`))