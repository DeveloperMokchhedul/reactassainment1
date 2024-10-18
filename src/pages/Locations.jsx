import React from 'react'
import Container from "../components/common/Container"
import Location from '../components/Locations/Location'
import Cast from '../components/Locations/Cast'
import { useSelector } from 'react-redux'

function Locations() {
  const data = useSelector((state) => state.progress.progressData)
  console.log(data);

  return (
    <>
      <div className='mt-[40px]'>
        <Container>
          <div className='grid grid-cols-12'>

            <div className='col-span-6'>
              <div>
                <Location />
                <Cast />
              </div>


            </div>
            {
              data?.map((item, index) => (
                <div key={index} className='col-span-6'>
                  <p className='font-onest text-[154px] text-secondary'>{item?.title}</p>
                  <p className='font-onest text-[154px] text-secondary'>{item?.description}</p>
                  <p className='font-onest text-[154px] text-secondary'>{item?.text}</p>
                  <img className='w-[526px] h-[503px] my-[20px]' src="/images/incidentmap.png" alt="" />
                </div>

              ))
            }




          </div>
        </Container>
      </div>

    </>
  )
}

export default Locations
