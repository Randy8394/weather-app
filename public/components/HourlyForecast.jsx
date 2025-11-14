"use client"

import React,{useRef} from 'react'
import img from "../media/weather.png"
import "./HourlyForecast.css"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"



function HourlyForecast() {
    console.log('HourlyForecast component rendered');

    const scrollRef = useRef(null); //scroll bar reference

    //scroll functions
    const scrollLeft=()=>{
        console.log('Scrolling left');
        scrollRef.current.scrollBy({
            left:-100,
            behavior:'smooth'})
    }

        const scrollRight=()=>{
        console.log('Scrolling right');
        scrollRef.current.scrollBy({
            left: 100,
            behavior:'smooth'})
    }


    return(
        <div className='relative mt-6'>
          <div ref={scrollRef} className=' flex gap-4 mx-10 py-2 overflow-auto scrollbar-hide' style={{scrollBehavior:'smooth'}}>

            {/*One Hour*/}
            <div className='flex flex-col items-center shadow-lg bg-blue-400 py-2 rounded px-4'>
                <p>14:00</p>
                <img src={img.src} 
                    alt="weather icon" 
                    className='w-10 mx-auto'/>
                <p>2 °C</p>
            </div>

            <div className='flex flex-col items-center shadow-lg bg-blue-400 py-2 rounded px-4'>
                <p>14:00</p>
                <img src={img.src} 
                    alt="weather icon" 
                    className='w-10 mx-auto'/>
                <p>2 °C</p>
            </div>

             <div className='flex flex-col items-center shadow-lg bg-blue-400 py-2 rounded px-4'>
                <p>14:00</p>
                <img src={img.src} 
                    alt="weather icon" 
                    className='w-10 mx-auto'/>
                <p>2 °C</p>
            </div>
            
            <div className='flex flex-col items-center shadow-lg bg-blue-400 py-2 rounded px-4'>
                <p>14:00</p>
                <img src={img.src} 
                    alt="weather icon" 
                    className='w-10 mx-auto'/>
                <p>2 °C</p>
            </div>

             <div className='flex flex-col items-center shadow-lg bg-blue-400 py-2 rounded px-4'>
                <p>14:00</p>
                <img src={img.src} 
                    alt="weather icon" 
                    className='w-10 mx-auto'/>
                <p>2 °C</p>
            </div>
            
            <div className='flex flex-col items-center shadow-lg bg-blue-400 py-2 rounded px-4'>
                <p>14:00</p>
                <img src={img.src} 
                    alt="weather icon" 
                    className='w-10 mx-auto'/>
                <p>2 °C</p>
            </div>

          </div>
          

        {/* scroll buttons */}

        <button onClick={scrollLeft}
            className="absolute left-0 top-1/2 bg-blue-400 text-white transform -translate-y-1/2
                       rounded-full w-8 h-8 flex items-center justify-center">
            <FaChevronLeft className='w-4 h-4 '/>
        </button>

        <button onClick={scrollRight}
            className="absolute right-0 top-1/2 bg-blue-400 text-white transform -translate-y-1/2
                       rounded-full w-8 h-8 flex items-center justify-center">
            <FaChevronRight className='w-4 h-4 '/>
        </button>

        </div>
    )
}

export default HourlyForecast