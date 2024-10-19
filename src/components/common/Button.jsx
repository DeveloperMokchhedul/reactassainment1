import React from 'react'
import cn from "../../utils/cn.js"

function Button({children , className, onClick}) {
  return (
    <>
    <button onClick={onClick} className={cn(` w-[148px] flex gap-[5px] items-center justify-center h-[42px] rounded-[6px] font-bold text-[8px] md:text-[12px] text-white bg-[#F26922] transition-all duration-200 hover:scale-105 `,className)} >{children}</button>
      
    </>
  )
}

export default Button
