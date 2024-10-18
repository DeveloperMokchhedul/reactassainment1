import React from 'react'
import cn from '../../utils/cn'

function Heading({children, className}) {
    return (
        <>
            <div className={cn(`flex justify-between`, className)}>
                <p>{children}</p>
                <p className='underline'>See all</p>
            </div>

        </>
    )
}

export default Heading
