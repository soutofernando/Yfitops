import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../ui/logo/Logo'
import NavigationOptions from './NavigationOptions'


const NavigationSideMenu = () => {

    return (
        <div className='bg-black p-4 pr-16 h-full'>
            <Link to="/">
                <div className='flex item'>
                    <Logo />
                    <span className='items-center flex text-white font-yfitops font-extrabold text-2xl'>
                        Yfitops
                        <span className="text-xs">
                            ™
                        </span>
                    </span>
                </div>
            </Link>
            <div>
                <NavigationOptions />
            </div>
            <div className='text-gray-white text-xs pt-72'>
                <div>
                    <Link to="/">
                        <span className='hover:underline'>Cookies</span>
                    </Link>
                </div>
                <div className='mt-4'>
                    <Link className='hover:underline' to="/">
                        <span>Privacy</span>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default NavigationSideMenu

