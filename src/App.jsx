import { useState } from 'react';

function App() {
  const [weather, setweather] = useState(null);

  const getweather = async (city) => {
    const apikey =import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    setweather(data);
  };

  return (
    <>
    <div className='app'>
      <h1 className='title'>Weather App</h1>
      <SearchBox onSearch={getweather}/>
      {weather && <weatherCard data={weather} />}

    </div>
    </>
  );
}

export default App
