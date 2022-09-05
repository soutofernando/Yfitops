import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface AlbumProps {
    image: string | undefined
    name: string
    release: string
    artist: string
   
}

const FoundAlbums: FC<AlbumProps> = ({ image, name, release, artist }) => {
    return (
       
            <div className='p-4 bg-black-gray rounded-md hover:bg-black-gray-hover text-white w-full h-64'>
                <div>
                    <img src={image} className="rounded-md h-36 w-full" />
                </div>
                <div className='mt-4'>
                    <p className='text-white w-full text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis'>{name}</p>
                </div>
                <div className='mt-1 pb-10'>
                    <div className='text-gray-white font-semibold flex'>
                        <span className='mr-1'>
                            {release.substring(0, 4)}
                        </span>
                        <div>•</div>
                        <p className='ml-1 overflow-hidden whitespace-nowrap text-ellipsis'>
                            {artist}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default FoundAlbums