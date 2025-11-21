'use client';

import type React from "react";
import { FaMapMarkedAlt, FaSearch } from "react-icons/fa";
import axios from "axios";
import {useState, useEffect} from "react";
import bg from './bg.jpg';

const Background = () => {

    const [weatherData, setWeatherData] = useState<any>(null);
    const [city, setCity] = useState('');
    const [error, setError] = useState("");
    const [isCelsius, setIsCelsius] = useState(true);

  const api_key = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const api_url = "https://api.weatherapi.com/v1/forecast.json";

  const fetchData = async () => {
    if (!city) {
      console.log('City is empty, skipping fetch');
      return;
    }
    try {
      const url = `${api_url}?key=${api_key}&q=${city}&days=1`;
      console.log('Fetching weather data from URL:', url);
      const response = await axios.get(url);
      console.log('API Response:', response.data.forecast.forecastday[0].hour);
      setWeatherData(response.data);
      setError("");

      }

      catch(err){
        console.error('Fetch error:', err);
        setError("There was an error or the city was not found.");
        setWeatherData(null);
      }
    };

    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log('Got location:', latitude, longitude);
            setCity(`${latitude},${longitude}`);
            fetchData();
          },
          (error) => {
            console.error('Geolocation error:', error);
            setError(error.message);
          }
        );
      } else {
        setError('Geolocation is not supported');
      }
    };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  useEffect(() => {
    if (city) fetchData();
  }, [city]);

  console.log('Rendering with weatherData:', weatherData);
  console.log('Checking current hourly data access:', weatherData?.forecastday?.forecastday?.[0]?.hour);
  console.log('Corrected path for hourly data:', weatherData?.forecast?.forecastday?.[0]?.hour);
  
  return (
    <div style={{backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="relative w-full h-screen overflow-hidden">
      {/* Overlay (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Content */}
     <div className="relative z-10 min-h-screen flex items-center justify-center">
        {/*Card Container*/}
        <div className="bg-white shadow-lg mt-10 p-4 rounded w-full max-w-sm mx-4">
           <div className="flex">
            {/*Input Field & search button*/}
            <div className="flex border rounded items-center px-2 py-2 w-full">
            <FaSearch className="h-5 w-5 text-black"/>
            <input
              type="text"
              placeholder="Enter City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyUp={handleKeyPress}
              className="pl-2 border-none focus:outline-none text-black placeholder:text-gray-500 flex-1"
            />
          </div>

          {/* current location button */}
          <button onClick={getCurrentLocation}
          className="px-4 py-2 bg-blue-300 text-white ml-2 rounded hover:bg-blue-600">
            <FaMapMarkedAlt className="w-5 h-5"/>
          </button>

        </div>
       {/* display the error message */}
      { error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Weather Data Display */}
      {weatherData?.location && (
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold text-black">{weatherData.location.name}</h2>
          {/* Weather Icon */}
          <img src={weatherData.current.condition.icon} alt="Weather icon" className="mx-auto h-40"/>
          <p className="text-lg font-semibold text-black">{isCelsius ? weatherData.current.temp_c : weatherData.current.temp_f}°{isCelsius ? 'C' : 'F'}</p>
          <p className="text-sm text-black">Humidity: {weatherData.current.humidity}%</p>
          <p className="text-sm text-black">Wind Speed: {weatherData.current.wind_kph} km/h</p>
          <button onClick={() => setIsCelsius(!isCelsius)} className="mt-2 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            change to °{isCelsius ? 'F' : 'C'}
          </button>
          <p className="text-sm capitalize font-semibold text-black">{weatherData.current.condition.text}</p>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}

export default Background;
