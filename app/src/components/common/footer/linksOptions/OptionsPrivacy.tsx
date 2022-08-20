import { Link } from '@remix-run/react'
import React from 'react'

const optionsPrivacy = [
    { name: "Legal", link: "/premium" },
    { name: "Privacy Center", link: "/premium" },
    { name: " Privacy Policy", link: "/premium" },
    { name: "Cookies", link: "/premium" },
    { name: "About ads", link: "/premium" },
]

const OptionsPrivacy = () => {
    return (
        <div>
            {optionsPrivacy.map((link) => (
                <Link key={link.name} to={link.link} >
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 hover:text-green-400 cursor-pointer ml-6">
                        {link.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default OptionsPrivacy