import { Disclosure } from '@headlessui/react'
import { UploadIcon } from '@heroicons/react/outline'
import React from 'react'

const optionsPanel = [
    { name: "Premium", href: '/premium' },
    { name: "Support", href: "/support" },
    { name: "Download", href: "/download" },
    { name: "Sign up", href: "/signup" },
    { name: "Login", href: "/login" },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const NavigationPanel = () => {
    return (
        <Disclosure.Panel className="lg:hidden bg-black w-44 rounded-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
                {optionsPanel.map((item) => (

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
    )
}

export default NavigationPanel