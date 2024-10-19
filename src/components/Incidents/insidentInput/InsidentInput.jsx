
import React, { useState } from 'react'
import Container from '../../common/Container'
import Input from './Input'
import TextArea from './TextArea'
import Button from "../../common/Button"
import { useDispatch } from 'react-redux'
import { addData } from '../../../redux/ProgressData'

function InsidentInput() {
 const dispatch =  useDispatch()
  const [input, setInput] = useState({
    title:"",
    description:""
  })
  console.log(input);
  const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value 

    setInput({
      ...input, 
      [name]:value
    })
    
  }

  const handleClick = ()=>{
    dispatch(addData(input))
  }



  
  return (
    <section className='py-[50px]'>
      <Container className="max-w-[752px]  ">
        <div className='space-y-[12px]'>
            <Input onChange={handleChange} />
            <TextArea onChange= {handleChange} />
          </div>

      </Container>
    </section>
  )
}

export default InsidentInput

