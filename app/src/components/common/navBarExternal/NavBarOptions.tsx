import React from 'react'
import { Link } from 'react-router-dom'

const optionsNavBar1 = [
    { name: "Premium", href: '/', link: "/premium" },
    { name: "Support", href: '/', link: "/support" },
    { name: "Download", href: '/', link: "/download" },
]

const optionsNavBar2 = [
    { name: "Sign up", href: '/', link: "/signup" },
    { name: "Login", href: '/', link: "/login" },
]

const NavBarOptions = () => {
    return (
        <div className="absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden">
            {optionsNavBar1.map((item) => (
                <Link  key={item.name} to={item.link}>
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
    )
}

export default NavBarOptions