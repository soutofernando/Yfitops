import React from 'react'
import { Link } from 'react-router-dom'


const linksCompany = [
    { name: "About", link: '/premium' },
    { name: "Jobs", link: '/premium' },
    { name: "For the Record", link: '/premium' },
]

const linksCommunities = [
    { name: "For Artists", link: '/premium' },
    { name: "Developers", link: '/premium' },
    { name: "Advertising", link: '/premium' },
    { name: "Investors", link: '/premium' },
    { name: "Providers", link: '/premium' },
]

const linksUseful = [
    { name: "Support", link: '/premium' },
    { name: "Web player", link: '/premium' },
    { name: "Free mobile app", link: '/premium' },
]

const iconsSocialMidia = [
    { id: 1, alt: "Icon Instagram", url: "https://icon-library.com/images/instagram-icon-white-png/instagram-icon-white-png-26.jpg" },
    { id: 2, alt: "Icon Twitter", url: "https://icon-library.com/images/twitter-icon-white-png/twitter-icon-white-png-10.jpg" },
    { id: 3, alt: "Icon Facebook", url: "https://www.resmed.com.br/hubfs/resmed-front/assets/images/icon-facebook-white.png" },

]

const optionsPrivacy = [
    { name: "Legal", link: "/premium" },
    { name: "Privacy Center", link: "/premium" },
    { name: " Privacy Policy", link: "/premium" },
    { name: "Cookies", link: "/premium" },
    { name: "About ads", link: "/premium" },
]

const FooterHome = () => {
    return (
        <div>
            <footer className="p-4 bg-gray-black mt-28 mb-16">
                <div className="lg:flex md:justify-around py-4">
                    <div className="xl:grid grid-cols-3 gap-3 sm:gap-3 sm:grid-cols-3">
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
                    </div>
                    <div className='flex md:pl-56'>
                        {iconsSocialMidia.map((icon) => (
                            <div key={icon.id} className='ml-4 bg-gray-ifitops h-12 w-12 rounded-full'>
                                <Link to='/premium' className='cursor-pointer'>
                                    <img src={icon.url} alt={icon.alt} className="w-10 h-10 p-2 ml-1 mt-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sm:flex  justify-between sm:items-center px-20">
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
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className='mt-4 sm:mt-0'>
                        <div className='flex  items-center'>
                            <span className='text-gray-400 text-sm font-medium'>© 2022 Yfitops AB</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterHome