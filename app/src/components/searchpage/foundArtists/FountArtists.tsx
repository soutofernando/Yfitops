import React, { FC } from 'react'

interface ArtistsProps {
    image: string 
    name: string
    type: string
}

const FountArtists: FC<ArtistsProps> = ({ image, name, type }) => {
    return (
        <div className='p-6 bg-black-gray rounded-md hover:bg-black-gray-hover text-white w-48 h-64'>
            <div>
                <img src={image} className="rounded-full h-36 " /> 
            </div>
            <div className='mt-4'>
                <p className='text-white w-full text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis'>{name}</p>
            </div>
            <div className='mt-1 pb-10'>
                <span className='text-gray-white font-semibold'>{type[0].toUpperCase() + type.substring(1)}</span>
            </div>
        </div>
    )
}

export default FountArtists