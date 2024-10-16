import React from 'react'
import Container from "../components/common/Container"
import ImageCardSystem from "../components/common/ImageCardSystem"
import ChatBox from '../components/dashboard/ChatBox'
import { RxCross2 } from 'react-icons/rx'


function Dashboard() {
  return (
    <>
      <Container className="relative pb-[250px]">
        <ImageCardSystem />
        {/* imageCard Sysem with chat */}

     <div className='w-[77px] absolute bottom-[10px]  right-[25px] text-xm h-[77px] flex items-center justify-center border rounded-full bg-white shadow-green-400'>
          <RxCross2 className='text-5xl' />
     </div>
      
        <div className='absolute bottom-[110px] right-[25px]'>
          <ChatBox />
        </div>


      </Container>




    </>
  )
}

export default Dashboard
