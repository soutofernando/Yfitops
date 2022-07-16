import React, { FC } from 'react'

interface Props {
    d: string
    className: string | undefined
}

const Icon: FC<Props> = ({ d, className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d={d} />
        </svg>


    )
}
export default Icon