import React from 'react'
import Image from 'next/image'

function Weather({data}) {

    const dateForSunset = new Date((data.sys.sunset) * 1000);
    const sunsetTime = dateForSunset.toLocaleTimeString("default"); 


    const dateForSunrise = new Date((data.sys.sunrise) * 1000);
    const sunriseTime = dateForSunrise.toLocaleTimeString("default"); 

  return (
    <div className='relative flex-col justify-between max-w-[500px] w-full h-[80vh] m-auto text-gray-100 z-10'>
        <div className='bg-gray-900/75 relative px-8 pb-8 rounded-lg'>
        <div className='relative flex justify-between pt-12'>
            <div className='flex flex-col items-center'>
                <Image 
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="/" 
                width="100"
                height="100"
                />
                <p className='text-2xl'>{ data.weather[0].main }</p>
            </div>
                <p className='text-9xl'>{ data.main.temp.toFixed(0) }&#176;C</p>
        </div>

        <div className='bg-black/50 relative p-8 rounded-lg mt-2'>

        <div>
            <p className='text-2xl text-center pb-6'>Weather in {data.name} </p>
            <div className='flex justify-between text-center'>
                <div>
                    <p className='font-bold text-2xl'> 
                        {data.main.feels_like.toFixed(0)}&#176;C 
                    </p>
                    <p className='text-xl'>Feels Like</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'> 
                        {data.main.humidity}% 
                    </p>
                    <p className='text-xl'>Humidity</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>
                        {data.wind.speed.toFixed(0)} MPH
                    </p>
                    <p className='text-xl'>Winds</p>
                </div>
            </div>
        </div>

        <div className='pt-8'>
            <div className='flex justify-evenly text-center'>
                <div>
                    <p className='font-bold text-2xl'> 
                        {sunriseTime}
                    </p>
                    <p className='text-xl'>Sunrise</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>
                        {sunsetTime}
                    </p>
                    <p className='text-xl'>Sunset</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Weather