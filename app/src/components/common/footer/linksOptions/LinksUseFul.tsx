import React from 'react'

const linksUseful = [
    { name: "Support", link: '/premium' },
    { name: "Web player", link: '/premium' },
    { name: "Free mobile app", link: '/premium' },
]

const LinksUseFul = () => {
    return (
        <div>
            <h2 className="mb-6 text-gray-900 uppercase dark:text-gray-500">UsefulL Links</h2>
            <ul className="text dark:text-white">
                {linksUseful.map((link) => (
                    <li key={link.name} className="mb-4">
                        <a href={link.link} className="hover:text-green-400 font-medium">{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LinksUseFul