import React from 'react'
import Title from '../../common/Title'
import Container from '../../common/Container'

function InsidentPlace() {
    return (
        <>
            <section>
                <Container className={"max-w-[752px] h-[589px]"}>
                    <Title className={"text-[24px] text-start"}>Where's the incident</Title>
                    <div className='max-w-[518px]'>
                    <p className='text-[14px] leading-[22px] text-secondary '>Enter a GPS, address. or pin point on the map. Try to be as accurate <br /> as possible, or click:Jurisdiction Wide</p>
                    </div>
                    <div>
                        <img src="/images/place.png" alt="" />
                    </div>
                   
                </Container>
            </section>

        </>
    )
}

export default InsidentPlace
