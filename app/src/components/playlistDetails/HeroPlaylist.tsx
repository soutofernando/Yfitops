import React, { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '~/src/contexts/search/SearchProvider'


const HeroPlaylist = () => {

    const { playlistDetails } = useContext(SearchContext)

    return (
        <div>
            <div className='flex p-8 h-104'>
                <div className='w-56 h-56'>
                    <img src={playlistDetails.images[0]?.url} className="h-56 w-56" alt='album image' />
                </div>
                <div className='ml-8 mt-10'>
                    <div>
                        <span className='text-white text-sm font-medium'>{playlistDetails.type.toUpperCase()}</span>
                    </div>
                    <div className='w-162'>
                        <p className={playlistDetails.name.length > 45 ?'text-white font-bold text-4xl' :"text-white font-bold text-5xl text-" }>{playlistDetails.name}</p>
                    </div>
                    <div className='h-1 w-120 mt-6'>
                        <p className='text-gray-white font-medium text-md overflow-hidden whitespace-nowrap text-ellipsis'>{playlistDetails.description}</p>
                    </div>
                    <div className='text-white text-base flex mt-6 font-medium' >
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPlaylist