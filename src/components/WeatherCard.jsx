import "./WeatherCard.css";

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p className="desc">{data.weather[0].description}</p>
      <p className="temp">{Math.round(data.main.temp)}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;