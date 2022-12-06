//express call
const express = require('express')
const dotenv = require('dotenv').config()

//setup port for api
const port = process.env.PORT || 5000

//connect to db
const connectDB = require('./config/db')
connectDB()

//creat express app
const app = express()

// enable the reception of json format from request body
app.use(express.json({limit: '10mb'}))

// enable the reception of encoded format from request body
app.use(express.urlencoded({ limit: '10mb',extended: true }))

// attain the endpoint from file
app.use('/api', require('./endpoint/endpoint_air_quality'))



//lisent to port 5000
app.listen(port, () => console.log(`Server started on port ${port}`))