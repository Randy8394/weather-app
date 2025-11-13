import React from "react";
import { FaMapMarkedAlt, FaSearch } from "react-icons/fa";

const VideoBackground = () => {
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
              className="pl-2 border-none focus:outline-none"
            />
          </div>

          {/* current location button */}
          <button className="px-4 py-2 bg-blue-300 text-white ml-2 rounded hover:bg-blue-600">
            <FaMapMarkedAlt className="w-5 h-5"/>
          </button>

        </div>
       
      {/* Weather Data Display */}
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold">Madrid</h2>
        {/* Weather Icon */}
        <p className="text-lg font-semibold">2 °C</p>
        <p className="text-sm capitalize font-semibold"> Cloudy </p>
       </div>

        </div>
      </div>
    </div>
  );
};

export default VideoBackground;