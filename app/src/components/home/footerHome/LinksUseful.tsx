import React from 'react'

const linksUseful = [
    { name: "Support", link: '/premium' },
    { name: "Web player", link: '/premium' },
    { name: "Free mobile app", link: '/premium' },
]

const LinksUseful = () => {
    return (
        <div>
            <h2 className="mb-6 text-white uppercase ">UsefulL Links</h2>
            <ul className="text text-gray-white">
                {linksUseful.map((link) => (
                    <li key={link.name} className="mb-4">
                        <a href={link.link} className="hover:underline font-medium">{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LinksUseful