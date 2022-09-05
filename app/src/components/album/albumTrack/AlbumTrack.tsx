import React, { FC, useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

interface AlbumTrackProps {
    link: string
    number_track: number
    name: string
    artist: string
    duration_ms: number
}

const AlbumTrack: FC<AlbumTrackProps> = ({ link, name, number_track, artist, duration_ms }) => {

    const { musicTime } = useContext(SearchContext)

    return (
        <a href={link}>
            <div className='flex hover:bg-gray-blackgray px-3 py-1 items-center justify-between rounded-md w-full'>
                <div className='flex items-center w-96'>
                    <div className='text-gray-white text-bold '>
                        <span>{number_track}</span>
                    </div>
                <div className='flex items-center ml-3'>
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

                <div className='text-gray-white text-bold'>
                    <span>{musicTime(duration_ms)}</span>
                </div>
            </div>
        </a>
    )
}

export default AlbumTrack