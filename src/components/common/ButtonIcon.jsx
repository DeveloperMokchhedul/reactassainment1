import React from 'react'
import cn from '../../utils/cn'

function ButtonIcon({children,className, onClick}) {
  return (
    <>
    <button onClick={onClick} className={cn(`md:py-[17px] px-[12px] md:px-[25px] gap-[5px] rounded-[6px] font-bold text-[8px] md:text-[12px] md:pr-[69px] text-white bg-[#F26922]`,className)} >{children}</button>
      
    </>
  )
}

export default ButtonIcon