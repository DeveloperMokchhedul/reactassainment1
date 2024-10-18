import React from 'react'
import { FaHillAvalanche } from 'react-icons/fa6'

function SingleDescriber({text, onClick}) {
  return (
    <div onClick={onClick} className='max-w-[180px] h-[69px]  col-span-6 sm:col-span-3 md:col-span- border-1 rounded-[6px] bg-bgSecondary hover:bg-primary hover:text-white flex items-center '>
      <div className='flex gap-[10px] px-[20px] py-[22px]'>
        <img className='w-[25px] h-[25px] hover:text-white ' src="/images/describer1.svg" alt="" />
        <p className='font-onest text-[14px] leading-[18px]'>{text}</p>
      </div>
    </div>
  )
}

export default SingleDescriber
