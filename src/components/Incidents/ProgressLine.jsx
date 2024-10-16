import React from 'react'

function ProgressLine() {
    return (
        <div className='max-w-[609px]  mx-auto relative'>
            <div className='flex justify-between'>
                <div className='w-[29px] h-[29px] bg-bgPrimary rounded-full'>
                </div>
                <div className='w-[29px] h-[29px] bg-bgPrimary rounded-full'>
                </div>
                <div className='w-[29px] h-[29px] bg-bgPrimary rounded-full'>
                </div>
            </div>
            <div className='w-full h-1 bg-bgPrimary absolute top-[50%] transform-[-50%]'>

            </div>
        </div>

    )
}

export default ProgressLine
