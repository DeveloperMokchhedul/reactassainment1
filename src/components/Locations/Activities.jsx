import React from 'react'
import PrimaryText from './primaryText'
import SecondaryText from './SecondaryText'

function Activities({className, image,title,des, date, price}) {
    return (
        <>
            <div className='flex gap-[17px] h-[108px] px-[10px] py-[15px] bg-bgPrimary rounded-[10px] transition-all duration-300 hover:scale-105'>
                <img src={image} alt="" />
                <div className='flex  flex-col'>
                    <PrimaryText>{title}</PrimaryText>
                    <div className='flex items-center gap-1'>
                        <SecondaryText>{des}</SecondaryText>
                        <img className='size-[4px]' src="/images/elips.png" alt="" />
                        <SecondaryText>{date}</SecondaryText>
                    </div>
                    <PrimaryText>{price}</PrimaryText>
                </div>
            </div>

        </>
    )
}

export default Activities
