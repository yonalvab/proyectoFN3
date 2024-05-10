import React, { Children } from 'react'

export const CincoDias = ({ children }) => {
    return (
        <>
            <div className=' flex justify-center items-center px-10 pt-16 pb-10 ' >
                <ul className=' grid grid-cols-2 gap-8 place-content-center 
                sm:flex ' >
                    {children}
                </ul>
            </div>
        </>
    )
}
