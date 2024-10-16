import React from 'react'
import Title from '../../common/Title'
import InsidentDes from './InsidentDes'

function Input() {
  return (
    <div>
      <Title className="text-[24px] text-start leading-[30px]"> Let’s give the incident a title? </Title>
     <InsidentDes>Make a title that will easily identify the incidents</InsidentDes>
      <div className='mt-[24px]'>
        <input className='bg-bgPrimary px-[10px] py-[21px] w-full outline-none rounded-[6px]' type="text" placeholder='Add title here' />
      </div>
    </div>
  )
}

export default Input
