import React from 'react'

const linksCompany = [
    { name: "About", link: '/premium' },
    { name: "Jobs", link: '/premium' },
    { name: "For the Record", link: '/premium' },
]

const LinksCompany = () => {
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Company</h2>
            <ul className="text dark:text-gray-white">
                {linksCompany.map((link) => (
                    <li key={link.name} className='mt-4'>
                        <a href={link.link} className="hover:underline font-medium">{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LinksCompany