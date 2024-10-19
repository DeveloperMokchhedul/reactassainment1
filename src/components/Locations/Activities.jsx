import React from 'react'

function Activities({className, image,title,des, date, price}) {
    return (
        <>
            <div className='flex gap-[17px] h-[108px] px-[10px] py-[15px] bg-bgPrimary rounded-[10px] transition-all duration-300 hover:scale-105'>
                <img src={image} alt="" />
                <div className='flex  flex-col'>
                    <h1>{title}</h1>
                    <div className='flex items-center gap-1'>
                        <p>{des}</p>
                        <img className='size-[4px]' src="/images/elips.png" alt="" />
                        <p>{date}</p>
                    </div>
                    <p>${price}</p>
                </div>
            </div>

        </>
    )
}

export default Activities
