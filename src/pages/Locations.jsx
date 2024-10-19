import React from 'react';
import Container from "../components/common/Container";
import Icondesign from '../components/Locations/Icondesign';
import LocationCard from '../components/Locations/LocationCard';
import { locationData } from '../api/loactionData';
import Heading from '../components/Locations/Heading';
import { activitiesData } from '../api/Activities';
import Activities from '../components/Locations/Activities';

function Locations() {
  return (
    <>
      <div className='mt-[40px]'>
        <Container>
          <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-[94px]'>

            {/* Left Section */}
            <div className='flex-1'>
              <div className='border-bgPrimary pb-[40px]'>
                <div className='flex flex-col gap-y-4 md:gap-y-[45px]'>
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

              <div className='border-y border-bgPrimary py-4 md:py-[40px]'>
                <p>Description</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>

              <div className='my-4 md:my-[40px]'>
                <Heading>Location</Heading>
                <div className='grid grid-cols-12 gap-4 md:gap-[17.5px] mt-[15px]'>
                  {locationData?.map((item, index) => (
                    <LocationCard key={index} {...item} className="" />
                  ))}
                </div>
              </div>

              <div className='border-y py-4 md:py-[40px] border-bgPrimary'>
                <Heading>Activities</Heading>
                <div className='flex flex-col gap-4 md:gap-[15px] mt-[15px]'>
                  {activitiesData.map((item, index) => (
                    <Activities key={index} {...item} />
                  ))}
                </div>
              </div>

              <div className='border-y py-4 md:py-[40px] border-bgPrimary'>
                <Heading>Document</Heading>
                <div className='flex flex-col gap-4 md:gap-[15px] mt-[15px]'>
                  {activitiesData.map((item, index) => (
                    <Activities key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className='flex-1 flex flex-col gap-4 md:gap-[17px]'>
              <p className='text-start'>Incident Map</p>
              <img className='w-full h-auto md:max-w-[556px]' src="/images/place.png" alt="Location Map" />
              <p>Start 19.1232, -118.233 | End 19.3245, -119.2323</p>
            </div>

          </div>
        </Container>
      </div>
    </>
  );
}

export default Locations;
