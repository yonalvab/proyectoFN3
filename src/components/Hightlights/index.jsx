import React from 'react'
import flechaAbajo from '../../assets/raton.png'

export const ItemsHightlights = ({ weatherData, locationData }) => {
    return (
        <>
            <li className=' w-[328px] h-[204px] bg-[#1E213A] flex flex-col justify-center items-center gap-5 ' >
                <h3 className='text-[#E7E7EB] font-medium text-[16px] leading-[19px] font-raleway ' >Wind status</h3>
                <div className='flex' >
                    <h2 className='text-[#E7E7EB] font-bold text-[64px] leading-[75px] font-raleway ' >{Math.round(weatherData?.wind?.speed * 2.237)}<span className='text-[#E7E7EB] font-raleway font-medium text-4xl ' >mph</span></h2>
                </div>
                <div className='flex gap-3' >
                    <button className='w-7 h-7 bg-[#FFFFFF4D] rounded-full pl-[8px] rotate-[230deg] ' >
                        <img src={flechaAbajo} alt="flechitabajo" />
                    </button>
                    <p className='text-[#E7E7EB]' >WSW</p>
                </div>
            </li>
            <li className=' w-[328px] h-[204px] bg-[#1E213A] flex flex-col justify-center items-center gap-5 ' >
                <h3 className='text-[#E7E7EB] font-medium text-[16px] leading-[19px] font-raleway ' >Humidity</h3>
                <div className='flex items-end' >
                    <h2 className='text-[#E7E7EB] font-bold text-[64px] leading-[75px] font-raleway ' >{weatherData?.main?.humidity ?? "84"}<span className='text-[#E7E7EB] font-raleway font-normal text-4xl ' >%</span></h2>
                </div>
                <div>
                    <div className='flex justify-between' >
                        <h3 className='font-raleway font-bold text-[12px] text-[#A09FB1]' >0</h3>
                        <h3 className='font-raleway font-bold text-[12px] text-[#A09FB1]' >50</h3>
                        <h3 className='font-raleway font-bold text-[12px] text-[#A09FB1]' >100</h3>
                    </div>
                    <div className='flex items-center justify-center' >
                        <div className='w-64 h-2  rounded-md border border-slate-950 bg-[#E7E7EB] ' >
                            <div className='bg-yellow-400 h-full rounded-md ' style={{ width: `${weatherData?.main?.humidity}%` }} >

                            </div>
                        </div>
                    </div>
                    <div className=' flex justify-end ' >
                        <h3 className='font-raleway font-bold text-[12px] text-[#A09FB1]' >%</h3>
                    </div>
                </div>
            </li>
            <li className=' w-[328px] h-[160px] bg-[#1E213A] flex flex-col justify-center items-center gap-2 ' >
                <h3 className='text-[#E7E7EB] font-medium text-[16px] leading-[19px] font-raleway ' >Visibility</h3>
                <div className='flex' >
                    <h2 className='text-[#E7E7EB] font-bold text-[64px] leading-[75px] font-raleway ' >{(weatherData?.visibility * 0.000621371).toFixed(1)}<span className='text-[#E7E7EB] font-medium text-4xl font-raleway ' >miles</span></h2>
                </div>
            </li>
            <li className=' w-[328px] h-[160px] bg-[#1E213A] flex flex-col justify-center items-center gap-2 ' >
                <h3 className='text-[#E7E7EB] font-medium text-[16px] leading-[19px] font-raleway ' >Air Pressure</h3>
                <div className='flex' >
                    <h2 className='text-[#E7E7EB] font-bold text-[64px] leading-[75px] font-raleway ' >{weatherData?.main?.pressure ?? "998"}<span className='text-[#E7E7EB] font-medium text-4xl font-raleway ' >mb</span></h2>
                </div>
            </li>
        </>
    )
}
