import WeatherRow from "./WeatherRow";

function Card() {
  return (
    <div className="bg-white text-black">
      <h1>Weather for Today</h1>
      <h2>in {/*{city}*/}</h2>
      <WeatherRow />
    </div>
  );
}

export default Card;
