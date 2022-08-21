import { Link } from '@remix-run/react'
import React, { FC, useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'


interface userPlaylistsProps {
    name: string
    image: string
    by: string
id: string
}

const UserPlaylists: FC<userPlaylistsProps> = ({ name, by, image, id }) => {

    return (
        <Link to={`/playlist/${id}`}>
            <div className='p-6 bg-black-gray rounded-md hover:bg-black-gray-hover text-white w-48 h-64'>
                <div>
                    <img src={image} className="rounded-md h-36 " />
                </div>
                <div className='mt-4'>
                    <p className='text-white w-full text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis'>{name}</p>
                </div>
                <div className='mt-1 pb-10'>
                    <span className='text-gray-white font-semibold'>By {by}</span>
                </div>
            </div>
        </Link>
    )
}

export default UserPlaylists