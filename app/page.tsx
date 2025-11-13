import Image from "next/image";
import React from "react";

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
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My Site
          </h1>
          <p className="text-lg md:text-2xl">
            Hello! This is a video background with Tailwind CSS in Next.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;