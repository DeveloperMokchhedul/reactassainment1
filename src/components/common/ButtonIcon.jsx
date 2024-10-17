import React from 'react'
import cn from '../../utils/cn'

function ButtonIcon({children,className, onClick}) {
  return (
    <>
    <button onClick={onClick} className={cn(`py-[17px] px-[25px] gap-[5px] rounded-[6px] font-bold text-[12px] pr-[69px] text-white bg-[#F26922]`,className)} >{children}</button>
      
    </>
  )
}

export default ButtonIcon