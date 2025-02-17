import axios from "axios";

const API_URL = "http://localhost:5000/api/flights/live"; // Your backend API

export const getFlights = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    return [];
  }
};
