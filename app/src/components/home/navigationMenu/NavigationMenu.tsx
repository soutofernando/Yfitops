import { Disclosure } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon, MenuIcon, UploadIcon, XIcon } from '@heroicons/react/outline'
import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchInput from '../../searchpage/searchInput/SearchInput'
import NavigationLocationBtns from './NavigationLocationBtns'
import NavigationMenuBtns from './NavigationMenuBtns'
import NavigationPanel from './NavigationPanel'

const navigationMenu2 =
    { name: "Sign up", link: "/signup" }


interface Props {
    variables: {
        AUTH_ENDPOINT: string
        CLIENT_ID: string
        REDIRECT_URI: string

    }
}

const NavigationMenu: FC<Props> = ({ variables }) => {

    const location = useLocation()

    return (
        <Disclosure as="nav" className="bg-black opacity-95 h-16">
            {({ open }) => (
                <>
                    <div className="px-4">
                        <div className="flex items-center justify-between h-16">
                            <div className="inset-y-0 left-0 flex items-center lg:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-white hover:text-white hover:bg-gray-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex  items-center lg:justify-start justify-center sm:items-stretch ">
                                <div className='flex items-center h-6'>
                                    <div>
                                       <NavigationLocationBtns />
                                    </div>

                                    <div className='md:w-96 w-full ml-2  md:ml-10'>
                                        {location.pathname == "/search" ? <SearchInput /> : ""}
                                    </div>
                                </div>

                            </div>

                            <div className="absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden">
                                <div className='lg:flex hidden items-center'>
                                    <NavigationMenuBtns />
                                    <span className='ml-6 text-white'>|</span>
                                    <div className='flex items-center'>
                                        <Link key={navigationMenu2.name} to={navigationMenu2.link}>
                                            <div className='ml-6'>
                                                <span className='text-gray-white font-bold hover:text-white hover:transition-all hover:duration-300'>
                                                    {navigationMenu2.name}
                                                </span>
                                            </div>
                                        </Link>
                                        <div className='ml-6' >
                                            <a href={`${variables.AUTH_ENDPOINT}?client_id=${variables.CLIENT_ID}&redirect_uri=${variables.REDIRECT_URI}&response_type=token`}>
                                                <button className='text-black font-bold hover:text-extrabold hover:bg-gray-white hover:text-white hover:transition-all hover:duration-300 bg-white rounded-full py-4 px-8'>Log in</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <NavigationPanel />
                    </div>
                </>
            )
            }
        </Disclosure >
    )
}

export default NavigationMenu

