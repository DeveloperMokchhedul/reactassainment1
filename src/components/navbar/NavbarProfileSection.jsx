import React from 'react'

function NavbarProfileSection() {
    return (
        <>
            <div className='flex md:gap-[5px] lg:gap-[9px]'>

                <div className='relative hidden md:flex'>
                    <img className='md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full' src="/images/notification.png" alt="2" />
                    <div className=' md:w-2 md:h-2 lg:w-4 lg:h-4 bg-[#4ADE80] rounded-full absolute md:top-0 lg:-top-1 right-0'>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img className='md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full' src="/images/profile.png" alt="1" />
                    <div>
                        <h3 className='font-onest font-semibold text-[12px] md:text-[10px] lg:text-4 md:leading-[10px] lg:leading-5 text-white md:text-[#A1A1AA]'>Usman Zafar</h3>
                        <p className='font-onest leading-[18px] text-[10px] md:text-[8px] lg:text-[14px] text-white md:text-secondary'>usmanzafar@gmail.com</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default NavbarProfileSection
