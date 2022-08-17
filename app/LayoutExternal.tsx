import React, { FC } from 'react'
import Footer from './src/components/common/Footer'
import NavBar from './src/components/common/navBarExternal/NavBarExternal'



const LayoutExternal: FC = ({ children }) => {
    return (
        <div>
            <NavBar />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    )
}

export default LayoutExternal