import { useState } from 'react';

function App() {
  const [weather, setweather] = useState(null);

  const getweather = async (city) => {
    const apikey = "e359c652283bbb8ea2dcddd7227a4d50"
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
