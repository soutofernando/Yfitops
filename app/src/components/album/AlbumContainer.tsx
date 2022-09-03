import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import FooterHome from '../home/footerHome/FooterHome'
import AlbumTrack from './albumTrack/AlbumTrack'
import HeaderAlbumTracks from './headerAlbumTracks/HeaderAlbumTracks'
import HeroAlbum from './heroAlbum/HeroAlbum'
import MoreAlbums from './moreAlbums/MoreAlbums'

const AlbumContainer = () => {

    const { albumDetails, albumTracks } = useContext(SearchContext)

    return (
        <div>
            {console.log(albumDetails)}
            <HeroAlbum
                image={albumDetails.images[0]?.url}
                name={albumDetails.name}
                artist={albumDetails.artists[0]?.name}
                type={albumDetails.album_type}
                total_tracks={albumDetails.total_tracks}
                release_date={albumDetails.release_date}
            />

            <div className='p-8 bg-gradient-to-b from-black to-gray-black-2 opacity-90 relative bottom-24'>
                <HeaderAlbumTracks />
                {albumTracks.map((track) => (
                    <div key={track.id}>
                        <AlbumTrack name={track.name}
                            artist={albumDetails.artists[0]?.name}
                            number_track={albumDetails.tracks.items.indexOf(track) + 1}
                            duration_ms={track.duration_ms}
                            link={albumDetails.external_urls.spotify}
                        />
                    </div>
                ))}
            </div>
           
            <FooterHome />
        </div>
    )
}

export default AlbumContainer