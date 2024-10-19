import React, { useState } from 'react'
import Container from "../components/common/Container"
import ImageCardSystem from "../components/common/ImageCardSystem"
import ChatBox from '../components/dashboard/ChatBox'
import { RxCross2 } from 'react-icons/rx'


function Dashboard() {
  const [isTrue, setIsTrue] = useState(false)
  return (
    <>
      <Container className="relative pb-[250px]">
        <ImageCardSystem />
        {/* imageCard Sysem with chat */}

        {
          isTrue ? <div onClick={()=>setIsTrue(!isTrue)} className='w-[77px] absolute bottom-[10px]  right-[25px] text-xm h-[77px] flex items-center justify-center border rounded-full bg-white shadow-green-400'>
            <RxCross2  className='text-5xl' />
          </div> 
          : 
          
          <div onClick={()=>setIsTrue(!isTrue)} className='absolute bottom-[10px]  right-[25px]'>
            <img  src="/images/chat.png" alt="" />
          </div>
        }



        <div className='absolute bottom-[110px] right-[25px]'>
          <ChatBox isTrue= {isTrue} />
        </div>


      </Container>




    </>
  )
}

export default Dashboard
