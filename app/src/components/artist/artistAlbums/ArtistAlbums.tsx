import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import ArtistAlbum from './ArtistAlbum'
import { Link } from "react-router-dom"

const ArtistAlbums = () => {

    const { artistAlbums } = useContext(SearchContext)
    const artistAlbumsfiltered = artistAlbums.filter((album) => { return artistAlbums.indexOf(album) < 6 })

    return (
        <div >
            <div className='font-bold text-2xl text-white mt-6 mb-6'>
                <span>Featuring Albums</span>
            </div>
            <div className='grid grid-cols-2 gap-y-6 gap-x-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-6'>
                {
                    artistAlbumsfiltered.map((album) => (
                        <div key={album.id}>
                            <Link to={`/album/${album.id}`}>
                                <ArtistAlbum name={album.name} image={album.images[0]?.url} release={album.release_date} type={album.type} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ArtistAlbums