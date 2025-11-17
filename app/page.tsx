'use client';

import type React from "react";
import { FaMapMarkedAlt, FaSearch } from "react-icons/fa";
import HourlyForecast from "@/public/components/HourlyForecast";
import img from "../public/media/weather.png";
import axios from "axios";
import {useState, useEffect} from "react";

const VideoBackground = () => {

   const [weatherData, setWeatherData] = useState<any>(null);
   const [city, setCity] = useState('MADRID');

  const api_key = "958405fb95e440b7bdb132400251711";
  const api_url = "http://api.weatherapi.com/v1/forecast.json";

  const fetchData = async () => {
    try {
      const url = `${api_url}?key=${api_key}&q=${city}&days=1`;
      console.log('Fetching weather data from URL:', url);
      const response = await axios.get(url);
      console.log('API Response:', response.data);
      setWeatherData(response.data);
      }

      catch(err){
        console.error("There was an error or the city was not found:", err);
      }
    };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('Rendering with weatherData:', weatherData);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/media/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Overlay (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Content */}
     <div className="relative z-10 min-h-screen flex items-center justify-center">
        {/*Card Container*/}
        <div className="bg-white shadow-lg mt-10 p-4 rounded w-full max-w-sm mx-4">
           <div className="flex">
            {/*Input Field & search button*/}
            <div className="flex border rounded items-center px-2 py-2 w-full">
            <FaSearch className="h-5 w-5"/>
            <input
              type="text"
              placeholder="Enter City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyUp={handleKeyPress}
              className="pl-2 border-none focus:outline-none"
            />
          </div>

          {/* current location button */}
          <button className="px-4 py-2 bg-blue-300 text-white ml-2 rounded hover:bg-blue-600">
            <FaMapMarkedAlt className="w-5 h-5"/>
          </button>

        </div>
       
      {/* Weather Data Display */}
      {weatherData?.location && (
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">{weatherData.location.name}</h2>
          {/* Weather Icon */}
          <img src={weatherData.current.condition.icon} alt="Weather icon" className="mx-auto h-40"/>
          <p className="text-lg font-semibold">{weatherData.current.temp_c}°C</p>
          <p className="text-sm capitalize font-semibold">{weatherData.current.condition.text}</p>
        </div>
      )}

       {/*Hourly Forecast*/}
       <HourlyForecast/>

        </div>
      </div>
    </div>
  );
};

export default VideoBackground;