import { useEffect, useState } from "react";
import { getFlights } from "../services/flightservice";

const FlightList = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFlights();
      console.log("Fetched Flights:", data);
      setFlights(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Live Flights</h2>
      <ul className="mt-4">
        {flights.length === 0 ? (
          <p>No flights available.</p>
        ) : (
          flights.map((flight) => (
            <li key={flight._id} className="border p-2 my-2">
              ✈ {flight.airline.name} - {flight.departure.airport} ➝{" "}
              {flight.arrival.airport}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FlightList;
