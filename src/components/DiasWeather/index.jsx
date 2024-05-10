import React from 'react'
import diasClima from '../../assets/diasWeather.png'
export const DiasWeather = ({ title, tempMax, tempMin, children }) => {
    return (
        <>
            <li className=' w-[120px] h-[177px] bg-[#1E213A] font-raleway flex flex-col items-center justify-center gap-4  ' >
                <h1 className=' font-raleway text-[#E7E7EB] ' >{title}</h1>
                {children}
                <div className=' flex gap-4 ' >
                    <h2 className=' font-raleway text-[#E7E7EB] font-medium text-[16px] ' >{tempMax}°C</h2>
                    <h2 className=' font-raleway text-[#A09FB1] font-medium text-[16px] ' >{tempMin}°C</h2>
                </div>
            </li>
        </>
    )
}