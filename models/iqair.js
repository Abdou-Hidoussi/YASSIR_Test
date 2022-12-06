const mongoose = require("mongoose");

// IQAIR model
const IQAIR = mongoose.model(
  "IQAIR",
  new mongoose.Schema({
    Time: {type: String, required: [true, 'please provide a time']},
    Date: {type: String, required: [true, 'please provide a date']},
    Pollution: {type: Object, required: [true, 'please provide a location polution']}
  })
);
module.exports = IQAIR;