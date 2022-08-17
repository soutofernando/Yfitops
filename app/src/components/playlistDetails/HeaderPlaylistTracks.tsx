import { ClockIcon, DotsHorizontalIcon, HeartIcon } from '@heroicons/react/outline'
import { PlayIcon } from '@heroicons/react/solid'
import React from 'react'

const HeaderPlaylistTracks = () => {
    return (
        <div>
            <div className='flex items-center '>
                <div>
                    <button >
                        <PlayIcon className='w-16 h-16 text-green-500 hover:p-1' />
                    </button>
                </div>
                <div className='ml-4'>
                    <button>
                        <HeartIcon className='w-10 h-10 text-gray-white hover:text-white transition-all' />
                    </button>
                </div>
                <div className='ml-6'>
                    <button>
                        <DotsHorizontalIcon className='w-8 h-8 text-gray-white hover:text-white transition-all' />
                    </button>
                </div>
            </div>
            <div className='flex items-center text-gray-white justify-between px-3 text-sm mt-6'>
                <div className='flex items-center'>
                    <div>
                        <span className='font-bold text-base'>#</span>
                    </div>
                    <div className='ml-6'>
                        <span>TITLE</span>
                    </div>
                </div>
                <div className='flex'>
                    <div className='ml-72'>
                        <span>ALBUM</span>
                    </div>
                    <div className='ml-80'>
                        <span>DATE ADDED</span>
                    </div>
                </div>
                <div>
                    <ClockIcon className='w-5 h-5' />
                </div>
            </div>
            <hr className='mt-2 border-gray-white opacity-40' />
        </div>
    )
}

export default HeaderPlaylistTracks