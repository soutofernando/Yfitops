import { Link } from 'react-router-dom'
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
            <ul className='lg:flex'>
                {optionsPrivacy.map((link) => (
                    <Link key={link.name} to={link.link} >
                        <li className="text-sm text-gray-500 hover:text-white sm:text-center dark:text-gray-400 hover:underline cursor-pointer ml-6 mt-2 md:mt-1">
                            {link.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default OptionsPrivacy