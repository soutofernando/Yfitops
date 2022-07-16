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
    { alt: "Icon Instagram", url: "https://icon-library.com/images/instagram-icon-white-png/instagram-icon-white-png-26.jpg" },
    { alt: "Icon Twitter", url: "https://icon-library.com/images/twitter-icon-white-png/twitter-icon-white-png-10.jpg" },
    { alt: "Icon Facebook", url: "https://www.resmed.com.br/hubfs/resmed-front/assets/images/icon-facebook-white.png" },

]

const optionsPrivacy = [
    { name: "Legal", link: "/premium" },
    { name: "Privacy Center", link: "/premium" },
    { name: " Privacy Policy", link: "/premium" },
    { name: "Cookies", link: "/premium" },
    { name: "About ads", link: "/premium" },
]

const Footer = () => {
    return (
        <div>
            <footer className="p-4 sm:p-6 bg-black mt-28">
                <div className="lg:flex md:px-44 px-20 py-16">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src="https://i.pinimg.com/564x/8f/7c/12/8f7c1294dd4d1d9e7d496db521c04aca.jpg" className=" h-10" alt="Spotify Logo" />
                            <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white font-yfitops">Yfitops™</span>
                        </a>
                    </div>
                    <div className="xl:grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:pl-20 ">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-500">Company</h2>
                            <ul className="text dark:text-white">
                                {linksCompany.map((link) => (
                                    <li className='mt-4'>
                                        <a href={link.link} className="hover:text-green-400 font-medium">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-500">Communities</h2>
                            <ul className="text dark:text-white">
                                {linksCommunities.map((link) => (
                                    <li className="mb-4">
                                        <a href={link.link} className="hover:text-green-400 font-medium ">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-gray-900 uppercase dark:text-gray-500">UsefulL Links</h2>
                            <ul className="text dark:text-white">
                                {linksUseful.map((link) => (
                                    <li className="mb-4">
                                        <a href={link.link} className="hover:text-green-400 font-medium">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='flex md:pl-56'>
                        {iconsSocialMidia.map((icon) => (
                            <div className='ml-4 bg-gray-ifitops h-12 w-12 rounded-full'>
                                <Link to='/premium' className='cursor-pointer'>
                                    <img src={icon.url} alt={icon.alt} className="w-10 h-10 p-2 ml-1 mt-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sm:flex justify-between sm:items-center md:ml-40">
                    <div>
                        {optionsPrivacy.map((link) => (
                            <Link to={link.link} >
                                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 hover:text-green-400 cursor-pointer ml-6">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className='md:pr-64'>
                        <div className='flex items-center'>
                            <img src="https://cdn.pixabay.com/photo/2018/06/24/17/33/world-3495023_960_720.png" className='w-6 h-4 mr-2' alt="icon earth" />
                            <span className='text-gray-400 text-sm'>Brazil</span>
                        </div>
                        <div className='flex items-center'>
                            <img src="https://cdn-icons-png.flaticon.com/512/106/106852.png" className='w-3 h-3 mr-2' alt="icon earth" />
                            <span className='text-gray-400 text-sm'> 2022 Yfitops ™</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer