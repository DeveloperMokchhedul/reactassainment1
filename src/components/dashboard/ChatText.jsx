import React from 'react'
import cn from '../../utils/cn'

function ChatText({children, className}) {
  return (
    <div className={cn(`bg-secondary text-white w-[213px] rounded-[7px]  flex flex-col gap-[15px] border-[1px] border-[#F4F4F5] shadow`, className)}>
        <p className='px-[13px] py-[15px] text-[12px] leading-[19px]'>{children}</p>
    
      
    </div>
  )
}

export default ChatText
