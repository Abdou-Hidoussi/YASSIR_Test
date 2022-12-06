//express call
const express = require('express')

//setp router
const endpoint = express.Router()

// get the endpoint functions
const { AirQuality, LowestAirQualityDate } = require('../endpoint_functions/endpoint_function_air_quality')




//endpoint Air quality
endpoint.post('/air_quality', AirQuality)
endpoint.get('/date_lowest_air_quality', LowestAirQualityDate)

//export router
module.exports = endpoint