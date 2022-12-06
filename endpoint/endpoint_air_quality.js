//express call
const express = require('express')

//setp router
const endpoint = express.Router()

// get the endpoint functions
const { AirQuality, GetAirQualityByDate } = require('../endpoint_functions/endpoint_function_air_quality')




//endpoint Air quality
endpoint.post('/air_quality', AirQuality)
endpoint.post('/air_quality_date', GetAirQualityByDate)

//export router
module.exports = endpoint