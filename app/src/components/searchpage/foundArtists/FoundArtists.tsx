import React, { FC } from 'react'

interface ArtistsProps {
    image: string 
    name: string
    type: string
}

const FountArtists: FC<ArtistsProps> = ({ image, name, type }) => {
    return (
        <div className='p-4 bg-black-gray rounded-md hover:bg-black-gray-hover text-white w-full h-64'>
            <div>
                <img src={image} className="rounded-full h-36 w-full" /> 
            </div>
            <div className='mt-4'>
                <p className='text-white w-full text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis'>{name}</p>
        </div>
            <div className='mt-1 pb-10'>
                <p className='text-gray-white font-semibold overflow-hidden whitespace-nowrap text-ellipsis'>{type[0].toUpperCase() + type.substring(1)}</p>
            </div>
        </div>
    )
}

export default FountArtists