import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { PlayIcon } from '@heroicons/react/solid'
import React from 'react'

const ArtistTracksButtons = () => {
    return (
        <div className='flex items-center p-4'>
            <div>
                <button >
                    <PlayIcon className='w-16 h-16 text-green-500 hover:p-1' />
                </button>
            </div>
            <div className='ml-4'>
                <button className='text-white border border-gray-white hover:border-white hover:transition-all rounded-md px-4 py-1 font-bold'>
                    FOLLOW
                </button>
            </div>
            <div className='ml-6'>
                <button>
                    <DotsHorizontalIcon className='w-8 h-8 text-gray-white hover:text-white transition-all' />
                </button>
            </div>
        </div>
    )
}

export default ArtistTracksButtons