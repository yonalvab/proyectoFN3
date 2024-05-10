import React, { useEffect, useState } from 'react'
import iconGPS from '../../assets/icon-gps.png'
import { AnimationPrincipal } from '../AnimationPrincipal'
import cuatroNubesBg from '../../assets/Cloud-background.png'
import iconUbicacion from '../../assets/pasador-de-ubicacion.png'
import GPS from '../../assets/gps.png'
import { WeatherNav } from '../WeatherNav'

export const FirstScreenM = ({ getLocation, weatherData, fechaHoy, changeToLondon, changeToBarcelona, changeToLongBeach, locationData }) => {
    const [isOpenWeatherNav, setIsOpenWeatherNav] = useState(false)


    return (
        <>
            <div className=' h-[810px] bg-[#1E213A] pb-[30px] sm:w-[459px] sm:h-[1023px] ' >
                <div className=' flex justify-between 
                sm:p-[25px] ' >
                    <button className=' w-[161px] h-[40px] my-[18px] mx-[11px] bg-[#6E707A] drop-shadow-xl text-white ' onClick={() => setIsOpenWeatherNav(true)} >Search for Places</button>
                    <button className=' w-10 h-10 bg-[#6E707A] rounded-full p-[9px] my-[18px] mx-[11px] ' ><img className=' w-[22px] h-[22px]  ' onClick={getLocation} src={GPS} alt="gps" /></button>
                </div>
                <div className=' flex flex-col items-center relative ' >
                    <img className=" absolute inset-0 w-full h-[326px] z-10 opacity-5 object-cover sm:h-[300px] " src={cuatroNubesBg} alt="cuatroNubes" />
                    <AnimationPrincipal className="relative z-20 " />
                    <div className='flex flex-col items-center  relative 
                    sm:gap-10 mt-12 ' >
                        <h1 className=' w-48 h-[169px]  font-medium text-[144px] text-[#E7E7EB] font-raleway ' >{weatherData?.main?.temp ? weatherData.main.temp.toFixed(0) : "15"}<span className=' text-[48px] font-medium text-[#A09FB1] font-raleway ' >°C</span></h1>
                        <h2 className=' font-raleway font-semibold text-4xl text-[#A09FB1] mt-10 ' >{weatherData?.weather?.[0]?.main ?? "shower"}</h2>
                        <div className='flex gap-4 my-8 ' >
                            <h2 className=' font-raleway text-lg font-medium text-[#88869D] ' >Today</h2><h1 className=' font-raleway text-lg font-medium text-[#88869D] ' >•</h1><h2 className=' font-raleway text-lg font-medium text-[#88869D] ' >{fechaHoy(weatherData.dt)}</h2>
                        </div>

                        <h3 className=' font-raleway text-lg font-semibold text-[#88869D] flex gap-2 ' ><img src={iconUbicacion} alt="ubicacionIcon" />{weatherData.weather && weatherData.name ? weatherData.name : "Helsinki"}</h3>

                    </div>
                </div>
            </div>
            {
                isOpenWeatherNav &&
                <WeatherNav setIsOpen={() => setIsOpenWeatherNav(false)} changeToLondon={changeToLondon} changeToBarcelona={changeToBarcelona} changeToLongBeach={changeToLongBeach} />
            }
        </>
    )
}