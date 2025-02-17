const Flight = require("../models/Flight");
const { fetchLiveFlights } = require("../config/aviationstack");

const getLiveFlights = async (req, res) => {
  const flights = await fetchLiveFlights();
  res.json(flights);
};

const saveFlightHistory = async (req, res) => {
  const flights = await fetchLiveFlights();
  await Flight.insertMany(flights);
  res.json({ message: "Flights saved" });
};

module.exports = { getLiveFlights, saveFlightHistory };
