// used to use throw error for promis rather then uing awit then
const asyncHnadler = require('express-async-handler')
const IQAIR = require('../models/iqair')
const fetch = require('node-fetch');
const dateFormat = require('date-format');

// connect to the IQAIR API
const check_location = async (LATITUDE, LONGITUDE) => {
    var lat = LATITUDE;
    var long = LONGITUDE;
    var api = "25402cb0-e222-4a7a-baab-80eeffe82e16";
    var url = "http://api.airvisual.com/v2/nearest_city?lat="+lat+"&lon="+long+"&key="+api
    const response = await fetch(url);
    var data = await response.json();

    if (data == "None") {
        return "None"
    }
    else {
        return data
    }
    
}

// get Air Quality data by Date
const LowestAirQualityDate = asyncHnadler( async (req, res) => {
    const airs = await IQAIR.find().sort({"aqicn" :-1}).limit(1)
    if (airs == [])
    {
        res.status(500).json({"error": "no data in the database"})
    }
    res.status(200).json(airs[0].Date)
})

// save the Air Quality of the closest city to database
const AirQuality = asyncHnadler( async (req, res) => {
    if(!req.body.LATITUDE || !req.body.LONGITUDE)
    {
        res.status(400).json({message: "Please pass \"LATITUDE\" and  \"LONGITUDE\" "})
        throw new Error("User diden't pass param")
    }
    air = await check_location(req.body.LATITUDE, req.body.LONGITUDE)

    if (air.status == "fail")
    {
        res.status(200).json({air})
    }
    date = dateFormat('dd:MM:yy', new Date());
    time = dateFormat('hh:mm:ss.SSS', new Date());
    ret = {"Result" :{"Pollution" :air.data.current["pollution"]}}
    save = {
        "Date": date,
        "Time": time,
        "Pollution" : air.data.current["pollution"]
    }
    air = await IQAIR.create(save)
    res.status(200).json(ret)
})

module.exports = {
    AirQuality,
    LowestAirQualityDate
}