import React, { FC } from 'react'

const Section: FC = ({ children }) => {
    return (
        <section className='w-screen '>{children}</section>
    )
}

export default Section