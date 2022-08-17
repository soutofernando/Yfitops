import React, { FC } from 'react'
import { getPlaylistsProps } from '~/src/features/types/ApiTypes'

interface Props {
    topPlaylist: getPlaylistsProps
}

const TopResults: FC<Props> = ({ topPlaylist }) => {
    
    return (
        <div className='p-6 bg-black-gray rounded-md pb-5 pr-5 hover:bg-black-gray-hover'>
            <img src={topPlaylist.images[0]?.url} className="w-24 h-24 rounded-md" />
            <div className='w-full mt-4'>
                <p className="text-white text-3xl font-bold w-88 overflow-hidden whitespace-nowrap text-ellipsis">{topPlaylist.name}</p>
            </div>
            <div className='flex mt-4'>
                <div>
                    <span className='text-gray-white'>
                        By {topPlaylist.owner.display_name}
                    </span>
                </div>
                <div className='ml-4'>
                    <span className='bg-black opacity-90 text-white px-3 py-1 rounded-full font-bold text-sm'>{topPlaylist.type.toUpperCase()}</span>
                </div>
            </div>
        </div>
    )
}

export default TopResults