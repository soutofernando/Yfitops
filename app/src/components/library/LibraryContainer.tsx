import React, { useContext, useEffect } from 'react'
import playlist from '~/routes/playlist.$playlistId'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import FooterHome from '../home/footerHome/FooterHome'
import PleaseLogin from './pleaseLogin/PleaseLogin'
import UserPlaylists from './userPlaylists/UserPlaylists'

const LibraryContainer = () => {

    const { userPlaylists } = useContext(SearchContext)
    const { logged } = useContext(AuthContext)

    return (
        <div className='p-8 w-full'>
            <div>
                <div>
                    <h1 className='text-white font-bold text-2xl'>Playlists</h1>
                </div>
                {logged == true ?
                    <div className='grid grid-rows-6 grid-cols-6 gap-3 mt-4'>
                        {
                            userPlaylists.map(((playlist) => (
                                <div key={playlist.id}>
                                    <UserPlaylists name={playlist.name} image={playlist.images[0].url} by={playlist.owner.display_name} id={playlist.id} />
                                </div>
                            )))
                        }
                    </div> :
                    <div className='mt-10 p-4'>
                        <PleaseLogin />
                    </div>}
            </div>
            <FooterHome />
        </div>
    )
}

export default LibraryContainer