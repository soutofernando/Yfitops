import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import Icon from '../../ui/icon/Icon'

const option = [
    { name: "Home", link: "/home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { name: "Search", link: "/search", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
    { name: "Your Library", link: "/library", icon: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" },
]

const option2 = [
    { name: "Create Playlist", link: "/newplaylist", icon: "M12 4v16m8-8H4" },
    { name: "Liked Songs", link: "/songs", icon: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" },
]

const NavigationOptions = () => {

    const location = useLocation()

    return (
        <div>
            <div className='pl-2 mt-6'>
                {option.map((link) => (
                    <div key={link.name} className='mt-2'>
                        <Link to={link.link} >
                            <div className={location.pathname == link.link ? 'hover:text-white hover:transition-all hover:duration-300 flex items-center text-white' :
                                "hover:text-white hover:transition-all hover:duration-300 flex items-center text-gray-white"}>
                                <Icon d={link.icon} className="w-8 h-8 mr-2" />
                                <span className='text-sm font-bold'>{link.name}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='pl-2 mt-6'>
                {option2.map((link) => (
                    <div key={link.name} className='mt-2'>
                        <Link to={link.link} >
                            <div className='hover:text-white hover:transition-all hover:duration-300 flex items-center text-gray-white'>
                                <Icon d={link.icon} className="w-8 h-8 mr-2" />
                                <span className='text-sm font-bold'>{link.name}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NavigationOptions