import React from 'react'
import { Link } from 'react-router-dom'

const iconsSocialMidia = [
    { id: 1, alt: "Icon Instagram", url: "https://icon-library.com/images/instagram-icon-white-png/instagram-icon-white-png-26.jpg" },
    { id: 2, alt: "Icon Twitter", url: "https://icon-library.com/images/twitter-icon-white-png/twitter-icon-white-png-10.jpg" },
    { id: 3, alt: "Icon Facebook", url: "https://www.resmed.com.br/hubfs/resmed-front/assets/images/icon-facebook-white.png" },

]


const IconsSocialMidia = () => {
    return (
        <div className='flex md:pl-56'>
            {iconsSocialMidia.map((icon) => (
                <div key={icon.id} className='ml-4 bg-gray-ifitops h-12 w-12 rounded-full'>
                    <Link to='/premium' className='cursor-pointer'>
                        <img src={icon.url} alt={icon.alt} className="w-10 h-10 p-2 ml-1 mt-1" />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default IconsSocialMidia