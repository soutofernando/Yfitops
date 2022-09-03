import React from 'react'

const linksCommunities = [
    { name: "For Artists", link: '/premium' },
    { name: "Developers", link: '/premium' },
    { name: "Advertising", link: '/premium' },
    { name: "Investors", link: '/premium' },
    { name: "Providers", link: '/premium' },
]

const LinksCommunities = () => {
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Communities</h2>
            <ul className="text text-gray-white">
                {linksCommunities.map((link) => (
                    <li key={link.name} className="mb-4">
                        <a href={link.link} className="hover:underline font-medium ">{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LinksCommunities