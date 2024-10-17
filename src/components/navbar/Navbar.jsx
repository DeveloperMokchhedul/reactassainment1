import React, { useState } from 'react'
import Button from '../common/Button'
import { CiSearch } from 'react-icons/ci'
import ButtonIcon from '../common/ButtonIcon'
import Container from '../common/Container'
import { NavLink } from 'react-router-dom'
import { NavbarData } from '../../api/navbar'
import NavbarProfileSection from './NavbarProfileSection'
import { GiCrossMark, GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
  const [ismenu, setIsMenu] = useState(false)
  return (
    <>
      <header className='z-50 w-full bg-bgPrimary'>
        <Container className="pt-[23px] pb-[18px] ">
          <div className='flex justify-between items-center'>
            <img className='w-[131px] h-[36px]' src="/images/logo.png" alt="" />

            {/* mobile menu */}
            {
              ismenu ? <GiCrossMark onClick={() => setIsMenu(false)} className='text-white text-2xl z-50 md:hidden' /> : <GiHamburgerMenu onClick={() => setIsMenu(true)} className='text-white text-2xl z-50 md:hidden' />


            }

            <div className={`md:hidden absolute top-0 left-0 right-0 h-screen transition-all duration-400 -translate-x-[1000px]  flex flex-col items-center gap-5 ${ismenu && "bg-black/25 -translate-x-0"}`}>

              {
                ismenu &&
                <div className='flex flex-col items-center gap-8'>
                  <ul className='pt-[100px] flex flex-col gap-[30px] text-[14px] leading-[18px] text-gray'>
                    {
                      NavbarData?.map((item) => (
                        <li key={item.id} onClick={()=>setIsMenu(false)}>
                          <NavLink to={item.path} className="font-onest  text-white text-[14px] leading-[17px]">{item.label}</NavLink>
                        </li>
                      ))
                    }
                  </ul>
                  <div onClick={()=>setIsMenu(false)} className=' md:hidden  '>
                    <NavbarProfileSection />
                  </div>
                </div>
              }
            </div>





            {/* desktop menu start */}
            <div className='hidden md:flex'>
              <ul className='flex md:gap-[15px] lg:gap-[35px] md:text-[12px] lg:text-[14px] leading-[18px] text-gray'>
                {
                  NavbarData?.map((item) => (
                    <li key={item.id}>
                      <NavLink to={item.path} className="font-onest  text-secondary md:text-[12px] lg:text-[14px] leading-[17px]">{item.label}</NavLink>
                    </li>
                  ))
                }

              </ul>
            </div>
            {/* desktop menu start */}
            <div className='hidden md:flex'>
              <NavbarProfileSection />
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}

export default Navbar
