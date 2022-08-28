import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { PlayIcon } from '@heroicons/react/solid'
import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import PlaylistTrack from '../../playlistDetails/PlaylistTrack'
import ArtistAlbums from '../artistAlbums/ArtistAlbums'

const ArtistTracksContainer = () => {

    const { artistTopTracks } = useContext(SearchContext)
    const topTracksFiltered = artistTopTracks.filter((track) => { return artistTopTracks.indexOf(track) < 6 })

    return (
        <div className="">
            <div className='flex items-center p-4'>
                <div>
                    <button >
                        <PlayIcon className='w-16 h-16 text-green-500 hover:p-1' />
                    </button>
                </div>
                <div className='ml-4'>
                    <button className='text-white border border-gray-white hover:border-white hover:transition-all rounded-md px-4 py-1 font-bold'>
                        FOLLOW
                    </button>
                </div>
                <div className='ml-6'>
                    <button>
                        <DotsHorizontalIcon className='w-8 h-8 text-gray-white hover:text-white transition-all' />
                    </button>
                </div>
            </div>
            <div className='p-4'>
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