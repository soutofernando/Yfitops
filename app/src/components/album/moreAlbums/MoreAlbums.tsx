import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import ArtistAlbum from '../artistAlbum.tsx/ArtistAlbum'

const MoreAlbums = () => {

   

    return (
        <div>
            <div>
                <span className='text-white font-bold text-2xl'>More of</span>
            </div>
            < div className='flex' >
                {/* {artistAlbumsFiltered.map((album) => (
                    <div>
                        <ArtistAlbum name={album.name} image={album.images[0]?.url} release={album.release_date} id={album.id} />
                    </div>
                ))} */}
            </div >
        </div>
    )
}

export default MoreAlbums