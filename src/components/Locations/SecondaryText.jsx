import React from 'react'
import cn from "../../utils/cn"

function SecondaryText({children, className}) {
  return (
    <div className={cn(`font-onest  text-[14px] leading-[22px] text-secondary`,className)}>
        <p>{children}</p>
      
    </div>
  )
}

export default SecondaryText
