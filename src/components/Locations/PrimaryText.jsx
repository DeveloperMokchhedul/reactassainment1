import React from 'react'

function PrimaryText() {
  return (
    <>
    <div className={cn(`font-onest font-bold text-[16px] leading-[30px] text-titleColor`,className)}>
        <p>{children}</p>
      
    </div>
      
    </>
  )
}

export default PrimaryText
