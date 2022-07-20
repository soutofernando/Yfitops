import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import Logo from '../ui/logo/Logo'

const optionsNavBar1 = [
    { name: "Premium", href: '/', link: "/premium" },
    { name: "Support", href: '/', link: "/support" },
    { name: "Download", href: '/', link: "/download" },
]

const optionsNavBar2 = [
    { name: "Sign up", href: '/', link: "/signup" },
    { name: "Login", href: '/', link: "/login" },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    return (
        <Disclosure as="nav" className="bg-black">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-14 py-2">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex  items-center justify-center sm:items-stretch md:justify-start">
                                <a href='/' className='flex'>
                                    <Logo />
                                    <span className='items-center flex text-white font-yfitops font-extrabold text-2xl'>
                                        Yfitops
                                        <span className="text-xs">
                                            ™
                                        </span>
                                    </span>
                                </a>
                            </div>

                            <div className="absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden">
                                {optionsNavBar1.map((item) => (
                                    <Link key={item.name} to={item.link}>
                                        <div key={item.name}>
                                            <button className='text-white font-yfitops font-bold p-4 hover:text-green-400'>
                                                {item.name}
                                            </button>
                                        </div>
                                    </Link>
                                ))}
                                <span className='text-white px-4 font-semibold'>|</span>
                                {optionsNavBar2.map((item) => (
                                    <Link key={item.name} to={item.link}>
                                        <div key={item.name}>
                                            <button className='text-white font-yfitops font-bold p-4 hover:text-green-400'>
                                                {item.name}
                                            </button>
                                        </div>
                                    </Link>
                                ))}


                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {optionsNavBar1.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                            {optionsNavBar2.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}

export default NavBar