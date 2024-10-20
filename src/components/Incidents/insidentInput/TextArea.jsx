import React from 'react'
import Title from '../../common/Title'
import InsidentDes from './InsidentDes'

function TextArea({onChange}) {
    return (
        <div>
        <Title className="mt-[25px] text-[24px] text-start leading-[30px]"> Describe what happened during the incident? </Title>
        <InsidentDes>Share some information about the incident. The when, where, how.</InsidentDes>
        <div className='mt-[24px] '>
          <textarea name = "description" onChange={onChange}  placeholder='Type here' className='w-full bg-bgPrimary px-[10px] py-[21px] outline-none rounded-[6px]'></textarea>
        </div>
      </div>
    )
}

export default TextArea
 