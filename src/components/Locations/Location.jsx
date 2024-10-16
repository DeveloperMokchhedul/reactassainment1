import React from 'react'
import Icondesign from './Icondesign'
import Text from './Text'

function Location() {
    return (
        <>
            <div className='flex items-center gap-[15px]'>
                <Icondesign image={"/images/location.png"} />
                <div className=''>
                    <Text amount = {"Tulare Country, Los Angles, CA 23415"} text = {"Location"} />
                </div>

            </div>
        </>
    )
}

export default Location
