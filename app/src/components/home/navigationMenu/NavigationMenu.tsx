import { Disclosure } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon, MenuIcon, UploadIcon, XIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchInput from '../../searchpage/searchInput/SearchInput'

const navigationMenu = [
    { name: "Premium", link: "/premium" },
    { name: "Support", link: "/support" },
    { name: "Download", link: "/download" },
]

const navigationMenu2 = [
    { name: "Sign up", link: "/signup" },
    { name: "Log in", link: "/login" },
]

const optionsNavBar = [
    { name: "Premium", href: '/premium' },
    { name: "Support", href: "/support" },
    { name: "Download", href: "/download" },
    { name: "Sign up", href: "/signup" },
    { name: "Login", href: "/login" },
]



function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}


const NavigationMenu = () => {

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
                                        <button className='bg-black opacity-100 p-1'>
                                            <ChevronLeftIcon className='w-7 h-7 text-gray-white' />
                                        </button>
                                    </div>
                                    <div className='ml-4'>
                                        <button className='opacity-100 p-1'>
                                            <ChevronRightIcon className='w-7 h-7 text-gray-white' />
                                        </button>
                                    </div>

                                    <div className='md:w-96 w-full ml-2  md:ml-10'>
                                        {location.pathname == "/home/search" ? <SearchInput /> : ""}
                                    </div>
                                </div>

                            </div>

                            <div className="absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden">
                                <div className='lg:flex hidden'>
                                    <div className='flex'>
                                        {navigationMenu.map((link) => (
                                            <button key={link.name} onClick={() => window.open(link.link, "_blak")}>
                                                <div className='ml-6'>
                                                    <span className='text-gray-white font-bold hover:text-white hover:transition-all hover:duration-300'>{link.name}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    <span className='ml-6 text-white'>|</span>
                                    <div className='flex'>
                                        {navigationMenu2.map((link) => (
                                            <Link key={link.name} to={link.link}>
                                                <div className='ml-6'>
                                                    <span className={link.name == "Log in" ? 'text-black font-bold hover:text-extrabold hover:bg-gray-white hover:text-white hover:transition-all hover:duration-300  bg-white rounded-full py-4 px-8'
                                                        : 'text-gray-white font-bold hover:text-white hover:transition-all hover:duration-300'}>
                                                        {link.name}
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Disclosure.Panel className="lg:hidden bg-black w-44 rounded-sm">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {optionsNavBar.map((item) => (

                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        onClick={() => window.open(item.href)}
                                        className={classNames(
                                            'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'flex items-center justify-between px-3 py-2 rounded-md  text-base font-medium'
                                        )}
                                    >
                                        {item.name}
                                        <div>
                                            <UploadIcon className='w-6 h-6 text-gray-white' />
                                        </div>
                                    </Disclosure.Button>

                                ))}
                            </div>
                        </Disclosure.Panel>
                    </div>
                </>
            )
            }
        </Disclosure >
    )
}

export default NavigationMenu

