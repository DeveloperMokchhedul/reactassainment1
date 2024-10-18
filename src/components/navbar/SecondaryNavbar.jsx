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
            <nav className='bg-bgPrimary md:pt-[32px] md:pb-[23px] border-t p-5 md:p-0'>
                <Container>
                    <div className='md:flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start'>
                        <div className='flex flex-col gap-[06px] text-center md:text-start'>
                            <p className='font-onest text-[12px] leading-[15px] text-secondary'>Welcome back</p>
                            <h1 className='font-onest font-bold text-[26px] leading-[33px] text-bgBlack'>

                                {location.pathname === "/" && "Dashboard" ||
                                    location.pathname === "/incidents" && "Incidents" ||
                                    location.pathname === "/incidents/create/describer" && "New Incident" ||
                                    location.pathname === "/locations" && "DR-4699 March 2023 Severe Storms"}
                            </h1>
                        </div>

                        {/* button show and hidden acording to path */}

                        <div className='flex gap-5 justify-center'>
                            {
                                location.pathname === "/incidents/create/describer" ||
                                    location.pathname === "/incidents/create/describer/details" ||
                                    location.pathname === "/incidents/create/describer/details/location"
                                    ? "" :
                                    <>
                                        <ButtonIcon className={"bg-white text-black"}>Search incident</ButtonIcon>
                                        <Button className={"bg-white text-black"}>Sort By: Date modified</Button>
                                    </>

                            }


                            {/* use for back button logic start */}
                            {
                                location.pathname === "/incidents/create/describer"
                                    ? <Button className={"bg-white text-black"} onClick={() => navigate("/incidents/create")}>Back</Button> : ""
                            }
                            {
                                location.pathname === "/incidents/create/describer/details"
                                    ? <Button className={"bg-white text-black"} onClick={() => navigate("/incidents/create/describer")}>Back</Button> : ""
                            }

                            {
                                location.pathname === "/incidents/create/describer/details/location"
                                    ? <Button className={"bg-white text-black"} onClick={() => navigate("/incidents/create/describer/details")}>Back</Button> : ""
                            }
                            {/* use for back button logic end */}



                            {
                                location.pathname === "/"
                                && <ButtonIcon>Cypher AI</ButtonIcon>
                                ||
                                location.pathname === "/incidents"
                                && <ButtonIcon onClick={() => navigate("/incidents/create")}>New Incident</ButtonIcon>
                                ||
                                location.pathname === "/incidents/create/describer"
                                && <Button onClick={() => navigate("/incidents/create/describer/details")}>Next</Button>
                                ||
                                location.pathname === "/incidents/create/describer/details"
                                && <Button onClick={() => navigate("/incidents/create/describer/details/location")}>Next</Button>
                                ||
                                location.pathname === "/incidents/create/describer/details/location"
                                && <Button onClick={() => navigate("/locations")}>Finished</Button>
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
