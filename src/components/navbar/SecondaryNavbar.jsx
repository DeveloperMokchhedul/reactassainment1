import React from 'react'
import Container from '../common/Container'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Button from '../common/Button'
import ButtonIcon from '../common/ButtonIcon'
import { FaPlus } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'

function SecondaryNavbar() {
    const location = useLocation()
    console.log(location.pathname)
    const navigate = useNavigate()


    if (location.pathname === "/incidents/create") {
        return <Outlet />
    }

    return (
        <>
            <nav className='bg-bgPrimary md:pt-[32px] md:pb-[23px] border-t border-secondary/25 p-5 md:p-0'>
                <Container>
                    <div className='md:flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start'>
                        <div className='flex gap-[10px] text-center justify-center'>
                            {
                                location.pathname === "/incidents/create/describer" ||
                                    location.pathname === "/incidents/create/describer/details" ||
                                    location.pathname === "/incidents/create/describer/details/location"
                                    ?
                                    <div className='p-3 w-[41px] h-[41px] bg-white rounded-full'>
                                        <RxCross2 className='font-bold' />
                                    </div>
                                    : ""
                            }

                            <div className='flex flex-col gap-[06px] text-center md:text-start'>
                                {
                                    location.pathname === "/incidents/create/describer" ||
                                        location.pathname === "/incidents/create/describer/details" ||
                                        location.pathname === "/incidents/create/describer/details/location"
                                        ?
                                        <p className='font-onest text-[12px] leading-[15px] text-secondary'>Home - Incidents - New Incident</p>
                                        : <p className='font-onest text-[12px] leading-[15px] text-secondary'>Welcome back</p>


                                }

                                <h1 className='font-onest font-bold text-[26px] leading-[33px] text-bgBlack'>

                                    {location.pathname === "/" && "Dashboard" ||
                                        location.pathname === "/incidents" && "Incidents" ||
                                        location.pathname === "/incidents/create/describer" && "New Incident" ||
                                        location.pathname === "/incidents/create/describer/details" && "New Incident" ||
                                        location.pathname === "/incidents/create/describer/details/location" && "New Incident" ||
                                        location.pathname === "/locations" && "DR-4699 March 2023 Severe Storms"}
                                </h1>

                            </div>

                        </div>



                        {
                            location.pathname === "/incidents/create/describer" ?
                                <div className='relative md:w-[250px] lg:w-[350px] xl:w-[527px] bg-bgSecondary h-[7px] rounded-full mt-[20px]'>
                                    <div className='bg-[#FB923C] w-[33%] h-full rounded-full absolute'>
                                    </div>
                                </div>
                                : ""
                                    ||
                                    location.pathname === "/incidents/create/describer/details" ?
                                    <div className='relative w-[527px] bg-bgSecondary h-[7px] rounded-full mt-[20px]'>
                                        <div className='bg-[#FB923C] w-[65%] rounded-full h-full absolute'>
                                        </div>
                                    </div>
                                    : "" ||
                                        location.pathname === "/incidents/create/describer/details/location" ?
                                        <div className='relative w-[527px] bg-bgSecondary h-[7px] rounded-full mt-[20px]'>
                                            <div className='bg-[#FB923C] w-[100%] rounded-full h-full absolute'>
                                            </div>
                                        </div>
                                        : ""

                        }




                        {/* button show and hidden acording to path */}

                        <div className='flex gap-5 justify-center mt-[15px] md:mt-[0px]'>
                            {
                                location.pathname === "/incidents/create/describer" ||

                                    location.pathname === "/incidents/create/describer/details" ||
                                    location.pathname === "/incidents/create/describer/details/location"
                                    ? "" :
                                    <>
                                        <ButtonIcon></ButtonIcon>
                                        <Button className={"bg-white text-secondary"}>Sort By: Date modified</Button>
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
                                && <Button className={"w-[108px]"}>Cypher AI</Button>
                                ||
                                location.pathname === "/incidents"
                                && <Button className={""} onClick={() => navigate("/incidents/create")}> <FaPlus /> New Incident</Button>
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
                                && <Button><FaPlus /> New location</Button>




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
