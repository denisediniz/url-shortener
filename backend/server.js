import 'dotenv/config'
import cors from 'cors'
import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

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
app.use('/api/shorturl', routes)

// Init the backend
app.listen(process.env.PORT || 3001, () => console.log(`API listening on port ${process.env.PORT || 3001}`))