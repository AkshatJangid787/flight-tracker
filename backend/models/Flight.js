const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema(
  {
    flightNumber: String,
    airline: String,
    departure: String,
    arrival: String,
    latitude: Number,
    longitude: Number,
    altitude: Number,
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flight", FlightSchema);
