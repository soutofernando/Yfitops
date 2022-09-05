import { Link } from '@remix-run/react'
import React, { FC } from 'react'

interface PlaylistProps {
    image: string
    name: string
    by: string
}

const FoundPlaylists: FC<PlaylistProps> = ({ image, name, by }) => {
    return (
        <div>
            <div className='p-4 bg-black-gray rounded-md hover:bg-black-gray-hover text-white w-full h-64'>
                <div>
                    <img src={image} className="rounded-md h-36 w-full" />
                </div>
                <div className='mt-4'>
                    <p className='text-white w-full text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis'>{name}</p>
                </div>
                <div className='mt-1 pb-10'>
                    <p className='text-gray-white font-semibold overflow-hidden whitespace-nowrap text-ellipsis'>By {by}</p>
                </div>
            </div>
        </div>
    )
}

export default FoundPlaylists