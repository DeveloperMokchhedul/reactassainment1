import React from 'react'
import cn from "../../utils/cn.js"

function Button({children , className, onClick}) {
  return (
    <>
    <button onClick={onClick} className={cn(`py-[17px] px-[25px] rounded-[6px] font-onest  font-bold text-[12px] leading-[15px] text-white bg-primary`,className)} >{children}</button>
      
    </>
  )
}

export default Button
