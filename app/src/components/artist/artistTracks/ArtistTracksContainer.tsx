import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { PlayIcon } from '@heroicons/react/solid'
import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import PlaylistTrack from '../../playlistDetails/PlaylistTrack'
import ArtistAlbums from '../artistAlbums/ArtistAlbums'
import ArtistTracksButtons from './artistTracks/ArtistTracksButtons'

const ArtistTracksContainer = () => {

    const { artistTopTracks } = useContext(SearchContext)
    const topTracksFiltered = artistTopTracks.filter((track) => { return artistTopTracks.indexOf(track) < 6 })

    return (
        <div className="">
            <div className='p-4 bg-gradient-to-b from-black to-gray-black-2 opacity-90'>
                <ArtistTracksButtons />
                <div>
                    <span className='font-bold text-2xl text-white'>
                        Popular
                    </span>
                </div>
                <div className='mt-6'>
                    {
                        topTracksFiltered.map((track) => (
                            <div key={track.id}>
                                <PlaylistTrack
                                    name={track.name}
                                    artist={""}
                                    album={track.album.name}
                                    added_at={track.album.release_date}
                                    image={track.album.images[0]?.url}
                                    number_track={artistTopTracks.indexOf(track) + 1}
                                    duration_ms={track.duration_ms}
                                    link={track.external_urls.spotify} />
                            </div>
                        ))
                    }
                </div>
                <div>
                    <ArtistAlbums />
                </div>
            </div>
        </div>
    )
}

export default ArtistTracksContainer