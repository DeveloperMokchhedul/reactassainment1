import React from 'react'
import Container from '../common/Container'
import IncidentCard from './IncidentCard'
import Button from "../common/Button"
import ProgressLine from './ProgressLine'
import { IncidentCartData } from '../../api/IncidentCardData'
import Title from '../common/Title'

function GetStartPage() {
  return (
    <section className='my-[120px]'>
      <Container className="max-w-[815px] ">
        <div className='space-y-[33px]'>
          <div className='max-w-[613px] mx-auto space-y-[14px]'>
            <Title>Let’s get started</Title>
            <p className='text-center font-onest leading-[16px] text-secondary'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
          </div>

          <div>
            <ProgressLine />
          </div>

          <div className='flex flex-wrap items-center justify-center gap-[55px]'>
            {
              IncidentCartData.map((data)=>(
                <IncidentCard {...data} />
              ))
            }

          </div>
        </div>

        <div className='flex items-center justify-center mt-[85px]'>
          <Button className=" px-[25px] py-[8px]">Get started</Button>
        </div>

      </Container>
    </section>

  )
}

export default GetStartPage
