import React from 'react'
import cn from '../../utils/cn'

function LocationCard({ className, image, title, des, price }) {
    return (
        <div className={cn(`col-span-12 md:col-span-6 transition-all duration-300 hover:scale-105 lg:col-span-4 mx-auto `, className)}>
            <img className=" md:w-[214px] h-[177px] " src={image} alt="" />
            <div className='max-w-[214px] gap-[16px] mt-[16px]'>
                <h1 className='font-onest font-bold text-[14px] leading-[21px]'>{title}</h1>
                <p className='font-onest text-[12px] leading-[21px] text-secondary'>{des}</p>
                <p className='font-onest font-bold text-[14px] leading-[21px]'>${price}</p>

            </div>
        </div>
    )
} 

export default LocationCard
