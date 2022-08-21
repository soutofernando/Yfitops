import { Link } from '@remix-run/react'
import React, { FC } from 'react'

interface PlaylistProps {
    image: string
    name: string
    by: string
    id: string 
}

const FoundPlaylists: FC<PlaylistProps> = ({ image, name, by, id }) => {
    return (
        <div>
            <Link to={`/playlist/${id}`}>
                <div className='p-6 bg-black-gray rounded-md hover:bg-black-gray-hover text-white w-48 h-64'>
                    <div>
                        <img src={image} className="rounded-full h-36 " />
                    </div>
                    <div className='mt-4'>
                        <p className='text-white w-full text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis'>{name}</p>
                    </div>
                    <div className='mt-1 pb-10'>
                        <p className='text-gray-white font-semibold overflow-hidden whitespace-nowrap text-ellipsis'>By {by}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FoundPlaylists