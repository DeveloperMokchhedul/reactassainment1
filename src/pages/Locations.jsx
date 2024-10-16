import React from 'react'
import Container from "../components/common/Container"
import Location from '../components/Locations/Location'
import Cast from '../components/Locations/Cast'

function Locations() {
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

            <div className='col-span-6'>
              <p className='font-onest text-[14px] text-secondary'>Incident Map</p>
              <img className='w-[526px] h-[503px] my-[20px]' src="/images/incidentmap.png" alt="" />
            </div>


          </div>
        </Container>
      </div>

    </>
  )
}

export default Locations
