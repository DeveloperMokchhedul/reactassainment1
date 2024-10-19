import React from 'react'
import cn from '../../utils/cn'
import { IoIosSearch } from 'react-icons/io'

function ButtonIcon({children,className, onClick}) {
  return (
    <>
    <div className={cn(`w-[190px] h-[42px] bg-white text-secondary flex gap-[5px] items-center ps-[10px]   rounded-[6px]`,className)}>
    <IoIosSearch className='w-[18px] h-[18px]' />
      <input className='w-full outline-none' placeholder='Search Incident' type="text" />

    </div>
      
    </>
  )
}

export default ButtonIcon