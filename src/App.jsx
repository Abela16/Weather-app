import { useState } from 'react';
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    const apikey =import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <>
    <div className='app'>
      <h1 className='title'>Weather App</h1>
      <SearchBox onSearch={getWeather}/>
      {weather && <WeatherCard data={weather} />}

    </div>
    </>
  );
}

export default App
