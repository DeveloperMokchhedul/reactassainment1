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
            <Button className="rounded-[15px] py-[11px] px-[25px]">Send</Button>
        </div>
      
    </div>
  )
}

export default ChatboxBottom
