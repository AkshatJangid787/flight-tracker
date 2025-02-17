import FlightList from "../components/FlightList";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">✈ Flight Tracker</h1>
      <FlightList />
    </div>
  );
};

export default Home;
