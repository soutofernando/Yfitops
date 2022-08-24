import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import Logo from '../../ui/logo/Logo'
import NavigationOptions from './NavigationOptions'
import SuggestionsPlaylistsUser from './suggestionsPlaylistsUser/SuggestionsPlaylistsUser'


const NavigationSideMenu = () => {

    const { logged } = useContext(AuthContext)

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
            {logged ?
                <div>
                    <hr className='opacity-20 mt-4'/>
                    <div className='mt-4'>
                        <SuggestionsPlaylistsUser />
                    </div>
                </div> : <div />}
            <div className={logged ? 'text-gray-white text-xs pt-16' :'text-gray-white text-xs pt-72'}>
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

