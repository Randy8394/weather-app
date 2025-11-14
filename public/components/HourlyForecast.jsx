import React from 'react'
import img from "../media/weather.png"
function HourlyForecast() {
    return(
        <div className='mt6'>
          <div className=' flex gap-4 mx-10 py-2 overflow-auto scrollbar-hide' style={{scrollBehavior:'smooth'}}>

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
        </div>
    )
}

export default HourlyForecast