import React from 'react'
import Title from '../../common/Title'
import Container from '../../common/Container'
import Input from '../insidentInput/Input'
import { CiSearch } from 'react-icons/ci'

function InsidentPlace() {
    return (
        <>
            <section className=''>
                <Container className={"max-w-[752px] h-[589px] mt-[40px]"}>
                    <Title className={"text-[24px] text-start"}>Where's the incident</Title>
                    <div className='max-w-[518px]'>
                        <p className='text-[14px] leading-[22px] text-secondary '>Enter a GPS, address. or pin point on the map. Try to be as accurate <br /> as possible, or click:Jurisdiction Wide</p>
                    </div>
                    <div className='relative mt-[24px]'>
                        <img className='w-[752px] h-[490px]' src="/images/place.png" alt="" />
                        <div className='absolute top-[10px] left-[10px] flex  flex-col gap-[5px]'>
                            <div className='flex items-center gap-[5px]  w-[224px] bg-white px-[10px] py-[12px] rounded-[6px] top-[10px] left-[10px]'>
                                <CiSearch className='w-[18px] h-[18px]' />
                                <input
                                    className='w-full outline-none '
                                    placeholder='Enter incident address or GPS'
                                    type="text"
                                    name='' />
                            </div>

                            <div className='flex items-center gap-[5px]  w-[224px] bg-white  px-[10px] py-[12px] rounded-[6px] top-[10px] left-[10px]'>
                                <CiSearch className='w-[18px] h-[18px]' />
                                <input
                                    className='w-full outline-none '
                                    placeholder='Pinpoint damage'
                                    type="text"
                                    name='' />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default InsidentPlace
