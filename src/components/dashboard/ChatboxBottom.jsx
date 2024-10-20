import React from 'react'
import Button from "../common/Button"
import { CiCamera, CiImageOn } from 'react-icons/ci'
import { ImAttachment } from 'react-icons/im'

function ChatboxBottom() {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-[11px]'>
        <CiCamera />
        <CiImageOn />
        <ImAttachment />
        </div>
        <div>
          <Button className={"w-[80px] h-[30px] text-[12px]"}>send</Button>
        </div>
    
      
    </div>
  )
}

export default ChatboxBottom
