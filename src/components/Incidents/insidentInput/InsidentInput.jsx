
import React from 'react'
import Container from '../../common/Container'
import Input from './Input'
import TextArea from './TextArea'

function InsidentInput() {
  return (
    <section className='py-[50px]'>
      <Container className="max-w-[752px]  ">
        <div className='space-y-[12px]'>
            <Input />
            <TextArea />
  

          </div>
      </Container>
    </section>
  )
}

export default InsidentInput

