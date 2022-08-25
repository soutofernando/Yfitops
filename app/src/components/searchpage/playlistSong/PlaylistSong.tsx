import React, { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

interface Props {
    duration_ms: number
    image: string
    song: string
    artist: string
}

const PlaylistSong: FC<Props> = ({ duration_ms, image, song, artist }) => {

    const { musicTime } = useContext(SearchContext)

    return (
        <div className='flex hover:bg-gray-blackgray px-3 py-1 items-center justify-between rounded-md w-full'>
            <div className='flex items-center'>
                <div>
                    <img src={image} className="w-10 h-10" />
                </div>
                <div className='text-gray-white px-4'>
                    <div>
                        <span className='text-white font-semibold'>{song}</span>
                    </div>
                    <div>
                        <span className='font-medium'>{artist}</span>
                    </div>
                </div>
            </div>
            <div className='text-gray-white text-bold'>
                <span>{musicTime(duration_ms)}</span>
            </div>
        </div>
    )
}

export default PlaylistSong