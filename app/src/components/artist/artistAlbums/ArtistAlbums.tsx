import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import ArtistAlbum from './ArtistAlbum'

const ArtistAlbums = () => {

    const { artistAlbums } = useContext(SearchContext)
    const artistAlbumsfiltered = artistAlbums.filter((album) => { return artistAlbums.indexOf(album) < 6 })

    return (
        <div >
            <div className='font-bold text-2xl text-white mt-6 mb-6'>
                <span>Featuring Albums</span>
            </div>
            <div className='flex'>
                {
                    artistAlbumsfiltered.map((album) => (
                        <div key={album.id} className="ml-4">
                            <ArtistAlbum name={album.name} image={album.images[0]?.url} release={album.release_date} type={album.type} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ArtistAlbums