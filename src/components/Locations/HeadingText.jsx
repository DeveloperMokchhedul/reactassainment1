import React from 'react'
import cn from '../../utils/cn'

function HeadingText({children, className}) {
  return (
    <div>
      <div className={cn(`font-onest font-bold text-[16px] leading-[30px] text-titleColor`, className)}>
        <p>{children}</p>

      </div>

    </div>
  )
}

export default HeadingText
