import { Disclosure } from '@headlessui/react'
import React from 'react'


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

const NavBarPanel = () => {
    return (
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
    )
}

export default NavBarPanel