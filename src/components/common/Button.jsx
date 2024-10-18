import React from 'react'
import cn from "../../utils/cn.js"

function Button({children , className, onClick}) {
  return (
    <>
    <button onClick={onClick} className={cn(`md:py-[17px] py-[5px] px-[5px]  md:px-[25px] rounded-[6px] font-onest  md:font-bold text-[8px] md:text-[12px] leading-[15px] text-white bg-primary`,className)} >{children}</button>
      
    </>
  )
}

export default Button
