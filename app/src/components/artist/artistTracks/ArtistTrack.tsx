import React, { FC, useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

interface ArtistTrackProps {
    image: string
    song: string
    duration_ms: number

}

const ArtistTrack: FC<ArtistTrackProps> = ({ image, song, duration_ms }) => {

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
                        <span className='font-medium'>{ }</span>
                    </div>
                </div>
            </div>
            <div className='text-gray-white text-bold'>
                <span>{musicTime(duration_ms)}</span>
            </div>
        </div>

    )
}

export default ArtistTrack