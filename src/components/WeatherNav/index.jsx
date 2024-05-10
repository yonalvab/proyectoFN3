import React from 'react'
import Lupa from '../../assets/lupa.png'
import FlechaDerecha from '../../assets/flecha-correcta.png'

export const WeatherNav = ({ setIsOpen, changeToLondon, changeToBarcelona, changeToLongBeach }) => {
    return (
        <>
            <div className=' w-[375px] h-[672px] bg-[#1E213A] flex flex-col gap-5 py-3 fixed top-0 left-0 z-50 
            sm:w-[459px] sm:h-[1023px] sm:px-[40px] ' >
                <div className=' flex justify-end px-5 ' >
                    <span className=' text-[30px] text-[#E7E7EB] cursor-pointer ' onClick={setIsOpen} >x</span>
                </div>
                <div className=' flex px-4 gap-2 ' >
                    <div className=' w-[252px] h-[48px] flex justify-start items-center border border-solid border-[#E7E7EB] px-3 gap-4 ' >
                        <img className=' w-[20px] h-[20px] ' src={Lupa} alt="lupa" />
                        <input className='bg-transparent placeholder-[#616475] placeholder:font-medium placeholder:text-[16px] placeholder:font-raleway readonly ' type="text" placeholder='search location' />
                    </div>
                    <button className=' w-[86px] h-[48px] bg-[#3C47E9] text-white font-raleway ' >Search</button>
                </div>
                <div className=' px-4 flex flex-col gap-5 py-6 ' >
                    <div className=' relative w-[343px] h-[64px] cursor-pointer  ' >
                        <div className='  border border-transparent hover:border-[#616475] w-full h-full flex justify-between items-center px-2 ' onClick={changeToLondon} >
                            <h1 className=' font-raleway font-normal text-[16px] text-[#E7E7EB] leading-[19px] ' >London</h1>
                            <img className=' w-[10px] h-[12px] ' src={FlechaDerecha} alt="flechaderecha" />
                        </div>
                    </div>
                    <div className=' relative w-[343px] h-[64px] cursor-pointer  ' >
                        <div className='  border border-transparent hover:border-[#616475] w-full h-full flex justify-between items-center px-2 ' onClick={changeToBarcelona} >
                            <h1 className=' font-raleway font-normal text-[16px] text-[#E7E7EB] leading-[19px] ' >Barcelona</h1>
                            <img className='w-[10px] h-[12px]' src={FlechaDerecha} alt="flechaderecha" />
                        </div>
                    </div>
                    <div className=' relative w-[343px] h-[64px] cursor-pointer ' >
                        <div className=' border border-transparent hover:border-[#616475] w-full h-full flex justify-between items-center px-2  ' onClick={changeToLongBeach} >
                            <h1 className=' font-raleway font-normal text-[16px] text-[#E7E7EB] leading-[19px] ' >Long Beach</h1>
                            <img className='w-[10px] h-[12px]' src={FlechaDerecha} alt="flechaderecha" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
