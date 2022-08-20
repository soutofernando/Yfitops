import React from 'react'
import { Link } from 'react-router-dom'
import LinksCommunities from './linksOptions/LinksCommunities'
import LinksCompany from './linksOptions/LinksCompany'
import LinksUseFul from './linksOptions/LinksUseFul'
import OptionsPrivacy from './linksOptions/OptionsPrivacy'


const iconsSocialMidia = [
    { id:1, alt: "Icon Instagram", url: "https://icon-library.com/images/instagram-icon-white-png/instagram-icon-white-png-26.jpg" },
    { id:2, alt: "Icon Twitter", url: "https://icon-library.com/images/twitter-icon-white-png/twitter-icon-white-png-10.jpg" },
    { id:3, alt: "Icon Facebook", url: "https://www.resmed.com.br/hubfs/resmed-front/assets/images/icon-facebook-white.png" },

]


const Footer = () => {
    return (
        <div>
            <footer className="p-4 sm:p-6 bg-black mt-28">
                <div className="lg:flex md:justify-around md:px-44 px-20 py-16">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src="https://i.pinimg.com/564x/8f/7c/12/8f7c1294dd4d1d9e7d496db521c04aca.jpg" className=" h-10" alt="Spotify Logo" />
                            <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white font-yfitops">Yfitops™</span>
                        </a>
                    </div>
                    <div className="xl:grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:pl-20 ">
                       <div>
                        <LinksCompany />
                       </div>
                       <div>
                        <LinksCommunities />
                       </div>
                       <div>
                        <LinksUseFul />
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
                    <OptionsPrivacy />
                   </div>
                    <div className='mt-4 sm:mt-0'>
                        <div className='flex  items-center'>
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