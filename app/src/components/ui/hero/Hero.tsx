import React, { FC } from 'react'

const Hero: FC = ({children}) => {
    return (
        <div>
            <section>
                {children}
            </section>
        </div>
    )
}

export default Hero