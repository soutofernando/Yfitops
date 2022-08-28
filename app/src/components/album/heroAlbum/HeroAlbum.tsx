import { Link } from "react-router-dom"
import React, { FC, useContext } from 'react'


interface HeroAlbumProps {
    image: string
    artist: string
    type: string
    name: string
    total_tracks: number
    release_date: string
}

const HeroAlbum: FC<HeroAlbumProps> = ({ image, artist, name, total_tracks, type, release_date }) => {


    return (
        <div>
            <div>
                <div className='flex p-8 h-104'>
                    <div className='w-56 h-56'>
                        <img src={image} className="h-56 w-56" alt='album image' />
                    </div>
                    <div className='ml-8 mt-10'>
                        <div>
                            <span className='text-white text-sm font-medium'>{type.toUpperCase()}</span>
                        </div>
                        <div className='w-162'>
                            <p className={name.length > 45 ? 'text-white font-bold text-4xl' : "text-white font-bold text-5xl text-"}>{name}</p>
                        </div>
                        <div className='text-white text-base flex mt-6 font-medium' >
                            <div>

                                <span>
                                    <Link to="/" className='hover:underline'>
                                        {artist}
                                    </Link>
                                    <span className='items-center ml-2 mr-2'>•</span></span>
                            </div>
                            <div>
                                <span>{release_date.substring(0,4)}<span className='items-center ml-2 mr-2'>•</span></span>
                            </div>
                            <div>
                                <span>{total_tracks} songs</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroAlbum