import React, { FC } from 'react'
import IncentiveSignUp from './src/components/home/incentiveSignUp/IncentiveSignUp'
import NavigationMenu from './src/components/home/navigationMenu/NavigationMenu'
import NavigationSideMenu from './src/components/home/navigationSideMenu/NavigationSideMenu'

const LayoutInternal: FC = ({children}) => {
    return (
        <div>
            <div>
                <div className='flex'>
                    <div className='flex-2 bg-black'>
                        <div className='sticky top-0'>
                            <NavigationSideMenu />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='sticky top-0'>
                            <NavigationMenu />
                        </div>
                        <div className='bg-gray-black pt-8'>
                            <main>{children}</main>
                        </div>
                    </div>
                </div>
                <div className='fixed bottom-0 w-full'>
                    <IncentiveSignUp />
                </div>
            </div>

        </div>
    )
}

export default LayoutInternal