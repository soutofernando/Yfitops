import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import UserPlaylists from './userPlaylists/UserPlaylists'

const LibraryLogged = () => {

    const { userPlaylists } = useContext(SearchContext)

    return (
        <div>
            <div>
                <h1 className='text-white font-bold text-2xl'>Playlists</h1>
            </div>
            <div className='grid grid-rows-6 grid-cols-6 gap-3 mt-4'>
                {
                    userPlaylists.map(((playlist) => (
                        <div key={playlist.id}>
                            <UserPlaylists name={playlist.name} image={playlist.images[0].url} by={playlist.owner.display_name} id={playlist.id} />
                        </div>
                    )))
                }
            </div>
        </div>
    )
}

export default LibraryLogged