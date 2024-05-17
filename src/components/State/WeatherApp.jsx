import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d6f70583e4065bde56bd4610f675e763&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError('City not found');
    }
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-3xl mb-4">Weather App</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <input
          type="text"
          value={city}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md"
          placeholder="Enter city name"
          required
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Weather
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {weatherData && (
        <div className="mt-4">
          <p className="font-semibold">City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
