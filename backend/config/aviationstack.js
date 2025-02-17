const axios = require("axios");
require("dotenv").config();

const fetchLiveFlights = async () => {
    try {
        const response = await axios.get(`http://api.aviationstack.com/v1/flights?access_key=${process.env.AVIATIONSTACK_API_KEY}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching flights:", error);
        return [];
    }
};

module.exports = { fetchLiveFlights };
