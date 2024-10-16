import React from 'react'
import cn from '../../../utils/cn'

function InsidentDes({children, className}) {
    return (
        <>
            <p className={cn(`text-[14px] text-secondary`, className)}>{children}</p>

        </>
    )
}

export default InsidentDes
