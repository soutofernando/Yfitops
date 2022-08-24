import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import SuggestionPlaylist from './SuggestionPlaylist'

const SuggestionsPlaylistsUser = () => {

    const { userPlaylists } = useContext(SearchContext)

    return (
        <div className='overflow-auto'>
            {userPlaylists.map((playlist) => (
                <div key={playlist.id} className="mt-2">
                    <SuggestionPlaylist name={playlist.name} id={playlist.id} />
                </div>
            ))}
        </div>
    )
}

export default SuggestionsPlaylistsUser