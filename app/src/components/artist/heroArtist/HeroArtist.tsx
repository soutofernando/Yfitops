import { CheckIcon } from '@heroicons/react/outline'
import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

const HeroArtist = () => {

    const { artistDetails } = useContext(SearchContext)

    return (
        <div>
            <div className='w-full h-104'>
                <img src={artistDetails.images[0].url} className="h-full w-full" />
            </div>
            <div className='flex p-8 h-104'>
                <div className='ml-8 mt-10'>
                    <div className='pb-10 flex item-center'>
                        <div className='bg-blue-500 rounded-full'>
                            <CheckIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className='text-white ml-2'>
                            Verified Artist
                        </div>
                    </div>
                    <div className='w-162'>
                        <p className='text-white font-bold text-6xl'>{artistDetails.name}</p>
                    </div>
                    <div className='h-1 w-120 mt-6'>
                        <p className='text-gray-white font-medium text-md overflow-hidden whitespace-nowrap text-ellipsis'>{artistDetails.followers.total} followers</p>
                    </div>
                    {/* <div className='text-white text-base flex mt-6 font-medium' >
                        <div>

                            <span>
                                <Link to="/" className='hover:underline'>
                                    {playlistDetails.owner.display_name}
                                </Link>
                                <span className='items-center ml-2 mr-2'>•</span></span>
                        </div>
                        <div>
                            <span>{playlistDetails.followers.total} likes<span className='items-center ml-2 mr-2'>•</span></span>
                        </div>
                        <div>
                            <span>{playlistDetails.tracks.total} songs,</span>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HeroArtist