import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../../ui/logo/Logo'
import NavBarOptions from './NavBarOptions'
import NavBarPanel from './NavBarPanel'


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
                            <div>
                                <NavBarOptions />
                            </div>
                        </div>
                    </div>

                    <NavBarPanel />
                </>
            )
            }
        </Disclosure >
    )
}

export default NavBar