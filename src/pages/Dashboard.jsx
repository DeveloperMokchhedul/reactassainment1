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
          isTrue ? <div onClick={()=>setIsTrue(!isTrue)} className='w-[77px] h-[77px] z-50 fixed bottom-[1px]  right-[25px] text-xm  flex items-center justify-center  rounded-full bg-white shadow-btnShadow '>
            <RxCross2  className='text-2xl  ' />
          </div> 
          : 
          
          <div onClick={()=>setIsTrue(!isTrue)} className='fixed bottom-[1px]  right-[25px] '>
            <img className='shadow-btnShadow'  src="/images/chat.png" alt="" />
          </div>
        }



        <div className='fixed bottom-[87px] right-[25px]'>
          <ChatBox isTrue= {isTrue} />
        </div>


      </Container>




    </>
  )
}

export default Dashboard
