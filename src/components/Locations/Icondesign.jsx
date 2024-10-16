import React from 'react'

function Icondesign({image}) {
    return (
        <>
            <div className='w-[37px] h-[37px] bg-bgPrimary rounded-full flex items-center justify-center'>
                <img className='w-[19px] h-[19px] ' src={image} alt="" />
            </div>
        </>
    )
}

export default Icondesign
