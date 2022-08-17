import React, { FC, useContext, useEffect } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

interface PlaylistTracksProps {
    name: string
    artist: string
    album: string
    added_at: string
    image: string
    number_track: number
    duration_ms: number
    link: string
}

const PlaylistTrack: FC<PlaylistTracksProps> = ({ name, artist, album, added_at, image, number_track, duration_ms, link }) => {

    const { musicTime, formatDate } = useContext(SearchContext)

    return (
        <a href={link}>
            <div className='flex hover:bg-gray-blackgray px-3 py-1 items-center justify-between rounded-md w-full'>
                <div className='flex items-center w-96'>
                    <div className='text-gray-white text-bold '>
                        <span>{number_track}</span>
                    </div>
                    <div className='flex items-center ml-6'>
                        <div>
                            <img src={image} className="w-10 h-10" />
                        </div>
                        <div className='text-gray-white px-4'>
                            <div>
                                <span className='text-white font-semibold'>{name}</span>
                            </div>
                            <div>
                                <span className='font-medium'>{artist}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-gray-white text-bold text-left w-52 mr-2'>
                    <p className='text-left'>{album}</p>
                </div>
                <div className='text-gray-white text-bold mr-6'>
                    <span>{formatDate(added_at)}</span>
                </div>

                <div className='text-gray-white text-bold'>
                    <span>{musicTime(duration_ms)}</span>
                </div>
            </div>
        </a>
    )
}

export default PlaylistTrack