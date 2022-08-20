import React from 'react'


const linksCompany = [
    { name: "About", link: '/premium' },
    { name: "Jobs", link: '/premium' },
    { name: "For the Record", link: '/premium' },
]
const LinksCompany = () => {
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-500">Company</h2>
            <ul className="text dark:text-white">
                {linksCompany.map((link) => (
                    <li key={link.name} className='mt-4'>
                        <a href={link.link} className="hover:text-green-400 font-medium">{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LinksCompany