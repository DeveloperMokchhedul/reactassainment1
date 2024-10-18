


import React from 'react'
import Title from '../common/Title'
import Container from '../common/Container'
import SingleDescriber from './SingleDescriber'
import { describerData } from '../../api/describerData'
import { useDispatch } from 'react-redux'
import { addData } from '../../redux/ProgressData'


function IncidentDescriber() {
    const dispatch = useDispatch()
    const handleClick = (data)=>{
       dispatch(addData(data));
       
    }
    return (
        <section className='py-[50px]'>
            <Container className="max-w-[753px]  ">
                <div className=''>
                    <Title className="text-[24px] text-start leading-[30px]"> Which of these best describes the incident? </Title>
                    <div className='mt-[25px] grid grid-cols-12 gap-[11px] '>
                        {
                            describerData?.map((data)=>(
                                <SingleDescriber key={data.id} {...data} onClick = {()=>handleClick(data)} />
                            ))
                        }
 
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default IncidentDescriber