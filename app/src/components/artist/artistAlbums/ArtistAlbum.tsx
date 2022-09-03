import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface ArtistAlbumProps {
    image: string
    name: string
    release: string
    type: string
    id: string
}

const ArtistAlbum: FC<ArtistAlbumProps> = ({ image, name, release, type, id }) => {
    return (
        <Link to={`/album/${id}`}>
            <div className='p-6 bg-black-gray rounded-md hover:bg-black-gray-hover text-white w-48 h-64'>
                <div>
                    <img src={image} className="rounded-full h-36 " />
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
                            {type}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ArtistAlbum