import React from 'react'
import cn from '../../utils/cn'

function IncidentCard({ className, image, title, des }) {
  return (
    <div className={cn(`max-w-[235px]  rounded-[10px] px-[20px] py-[25px] bg-bgSecondary`, className)}>
      <img src={image} alt="" />
      <div className='pt-[68px] space-y-[22px]'>
        <h1 className='text-[20px] font-onest font-bold  leading-[29px]'>{title}</h1>
        <p className='font-onest text-secondary leading-[22px] text-[14px]'>{des}</p>

      </div>
    </div>
  )
}

export default IncidentCard
