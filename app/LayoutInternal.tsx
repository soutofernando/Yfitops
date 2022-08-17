import React, { FC } from 'react'
import IncentiveSignUp from './src/components/home/incentiveSignUp/IncentiveSignUp'
import NavigationMenu from './src/components/home/navigationMenu/NavigationMenu'
import NavigationSideMenu from './src/components/home/navigationSideMenu/NavigationSideMenu'


interface Props{
    variables: {
        AUTH_ENDPOINT: string
        CLIENT_ID: string
        REDIRECT_URI: string
    }
}

const LayoutInternal: FC<Props> = ({children, variables}) => {
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
                            <NavigationMenu variables={variables} />
                        </div>
                        <div className='bg-gray-black '>
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