const express = require("express");
const {
  getLiveFlights,
  saveFlightHistory,
} = require("../controllers/flightController");

const router = express.Router();

router.get("/live", getLiveFlights);
router.post("/history", saveFlightHistory);

module.exports = router;
