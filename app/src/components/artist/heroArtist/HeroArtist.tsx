import { CheckIcon } from '@heroicons/react/outline'
import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

const HeroArtist = () => {

    const { artistDetails } = useContext(SearchContext)

    return (
        <div className="flex justify-start items-center">
            <div>
                <img src={artistDetails.images[0].url} className="w-112 h-104" alt="artist image" />
            </div>

            <div className='ml-8'>
                <div className='pb-10 flex item-center'>
                    <div className='bg-blue-500 rounded-full'>
                        <CheckIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className='text-white ml-2'>
                        Verified Artist
                    </div>
                </div>
                <div className='w-120'>
                    <p className='text-white font-bold text-6xl'>{artistDetails.name}</p>
                </div>
                <div className='h-1 w-120 mt-6'>
                    <p className='text-gray-white font-medium text-md overflow-hidden whitespace-nowrap text-ellipsis'>{artistDetails.followers.total} followers</p>
                </div>
            </div>

        </div>
    )
}

export default HeroArtist