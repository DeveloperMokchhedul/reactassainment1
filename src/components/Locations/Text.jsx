import React from 'react'

function Text({text, amount}) {
  return (
    <>
        
            <p className='text-[14px] font-onest leading-[22px] text-secondary'>{text}</p>
            <h1 className='text-[20px] text-bgBlack font-bold'>{amount}</h1>
       
      
    </>
  )
}

export default Text
