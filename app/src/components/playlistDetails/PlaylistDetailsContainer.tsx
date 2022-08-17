import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import FooterHome from '../home/footerHome/FooterHome'
import HeaderPlaylistTracks from './HeaderPlaylistTracks'
import HeroPlaylist from './HeroPlaylist'
import PlaylistTrack from './PlaylistTrack'




const PlaylistDetailsContainer = () => {

    const { tracksPlaylist } = useContext(SearchContext)

    return (
        <div className=''>

            <div className='bg-gradient-to-b from-amber-500 to-amber-800'>
                <HeroPlaylist />
            </div>

            <div className='p-8 bg-gradient-to-b from-black to-gray-black opacity-90 relative bottom-24'>
                <HeaderPlaylistTracks />
                {tracksPlaylist.map((track) => (
                    <div>
                        <PlaylistTrack name={track.track.name}
                            artist={track.track.artists[0]?.name}
                            added_at={track.added_at}
                            album={track.track.album.name}
                            image={track.track.album.images[0]?.url}
                            number_track={tracksPlaylist.indexOf(track) + 1}
                            duration_ms={track.track.duration_ms}
                            link={track.track.external_urls.spotify}
                        />
                    </div>
                ))}
            </div>

            <FooterHome />
        </div>
    )
}

export default PlaylistDetailsContainer