import React from 'react'
import Container from '../common/Container'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Button from '../common/Button'
import ButtonIcon from '../common/ButtonIcon'

function SecondaryNavbar() {
    const location = useLocation()
    console.log(location.pathname)
    const navigate = useNavigate()


    if (location.pathname === "/incidents/create") {
        return <Outlet />
    }

    return (
        <>
            <nav className='bg-bgPrimary pt-[32px] pb-[23px] border-t'>
                <Container>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-[06px]'>
                            <p className='font-onest text-[12px] leading-[15px] text-secondary'>Welcome back</p>
                            <h1 className='font-onest font-bold text-[26px] leading-[33px] text-bgBlack'>

                                {location.pathname === "/" && "Dashboard" ||
                                location.pathname === "/incidents" && "Incidents" ||
                                location.pathname === "/locations" && "DR-4699 March 2023 Severe Storms"}
                            </h1>
                        </div>
                        <div className='flex gap-5'>
                            <ButtonIcon className={"bg-white text-black"}>Search incident</ButtonIcon>
                            <Button className={"bg-white text-black"}>Sort By: Date modified</Button>
                            {
                                location.pathname === "/" 
                                && <ButtonIcon>Cypher AI</ButtonIcon> 
                                 ||
                                location.pathname === "/incidents" 
                                 && <ButtonIcon onClick={() => navigate("/incidents/create")}>New Incident</ButtonIcon> 
                                 ||
                                 location.pathname === "/incidents/create/describer" 
                                 && <ButtonIcon onClick={() => navigate("/incidents/create/describer/details")}>Next</ButtonIcon> 
                                 ||
                                 location.pathname === "/incidents/create/describer/details" 
                                 && <ButtonIcon onClick={() => navigate("/incidents/create/describer/details/location")}>Next</ButtonIcon> 
                                 ||
                                 location.pathname === "/incidents/create/describer/details/location" 
                                 && <ButtonIcon onClick={() => navigate("/locations")}>Finished</ButtonIcon> 
                            ||
                            location.pathname === "/locations" 
                            && <ButtonIcon>new location</ButtonIcon> 
                                 
                                 
                                 
                                 
                            }
                            
                        </div>
                    </div>
                </Container>
            </nav>

            <Outlet />
        </>
    )
}

export default SecondaryNavbar
