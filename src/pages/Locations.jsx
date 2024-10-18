import React from 'react'
import Container from "../components/common/Container"
import Location from '../components/Locations/Location'
import Cast from '../components/Locations/Cast'
import { useSelector } from 'react-redux'
import Icondesign from '../components/Locations/Icondesign'
import { imageCard } from '../api/imagecard'
import LocationCard from '../components/Locations/LocationCard'
import { locationData } from '../api/loactionData'
import Heading from '../components/Locations/Heading'

import { activitiesData } from '../api/Activities'
import Activitie from './Activities'
import Activities from '../components/Locations/Activities'


function Locations() {
  const data = useSelector((state) => state.progress.progressData)
  console.log(data);

  return (
    <>
      <div className='mt-[40px]'>
        <Container>
          <div className='grid grid-cols-12 justify-between gap-[94px]'>

            <div className='col-span-6'>
              <div className=' border-bgPrimary pb-[40px]'>
                <div className='flex flex-col gap-y-[45px]'>
                  <div className='flex gap-2 items-center'>
                    <Icondesign image={"/images/location.png"} />
                    <div>
                      <p>Location</p>
                      <p>Tulare Country, Los Angles, CA 23415</p>
                    </div>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Icondesign image={"/images/cost.png"} />
                    <div>
                      <p>Approx Cost:</p>
                      <p>60,607456.00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='border-y border-bgPrimary py-[40px]'>
                <p>Description</p>
                <p>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
              </div>

              <div className='my-[40px]'>
                <Heading>Location</Heading>
                <div className=' grid grid-cols-12 gap-[17.5px] mt-[15px]'>
                  {
                     locationData?.map((item, index) => (
                      <LocationCard key={index} {...item} className={""} />
                    ))
                  }
                </div>
              </div>
              <div className='border-y py-[40px] border-bgPrimary'>
                <Heading>Activities</Heading>
                <div className='flex flex-col gap-[15px] mt-[15px] '>
                {
                  activitiesData.map((item, index)=>(
                    <Activities key={index} {...item} />

                  ))
                }
                </div>

              </div>


              <div className='border-y py-[40px] border-bgPrimary'>
                <Heading>Document</Heading>
                <div className='flex flex-col gap-[15px] mt-[15px] '>
                {
                  activitiesData.map((item, index)=>(
                    <Activities key={index} {...item} />

                  ))
                }
                </div>

              </div>
            </div>
            <div className='col-span-6 w-full flex flex-col gap-[17px]'>
              <p className='text-start'>Incident Map</p>
              <img className='w-[556px] h-[503px]' src="/images/place.png" alt="" />
              <p>Start 19.1232, -118.233     End 19.3245, -119.2323</p>

            </div>


          </div>
        </Container>
      </div>

    </>
  )
}

export default Locations
