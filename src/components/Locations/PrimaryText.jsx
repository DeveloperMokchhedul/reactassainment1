import React from 'react'
import cn from "../../utils/cn"

function PrimaryText({children, className}) {
  return (
    <div className={cn(`font-onest font-bold text-[16px] leading-[30px] text-titleColor`,className)}>
        <p>{children}</p>
      
    </div>
  )
}

export default PrimaryText
