import React from 'react'

function HeadingText() {
  return (
    <div>
      <div className={cn(`font-onest font-bold text-[16px] leading-[30px] text-titleColor`, className)}>
        <p>{children}</p>

      </div>

    </div>
  )
}

export default HeadingText
