import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import FoundAlbums from './foundAlbums/FoundAlbums'
import FountArtists from './foundArtists/FountArtists'
import FoundPlaylists from './foundPlaylists/FoundPlaylists'
import TopResults from './topResults/TopResults'
import PlaylistSongs from './playlistSong/PlaylistSong'

const LoggedContainer = () => {

    const { artists, playlists, tracks, albums } = useContext(SearchContext)
    const filteredSongs = tracks.filter((song) => { return tracks.indexOf(song) < 4 })
    const filteredArtists = artists.filter((artist) => { return artists.indexOf(artist) < 6 })
    const filteredAlbums = albums.filter((album) => { return albums.indexOf(album) < 6 })
    const filteredPlaylists = playlists.filter((playlist) => { return playlists.indexOf(playlist) < 6 })

   

    return (
        <div>
            {console.log()}
            <div className='mt-6 md:flex'>
                <div>
                    <div>
                        <span className='text-white font-bold text-2xl '>Top Results</span>
                    </div>
                    <div className='w-118'>
                        {
                            playlists[0] ? <div className='w-full mt-4'>
                                <TopResults topPlaylist={playlists[0]} />
                            </div> : <div />
                        }
                    </div>
                </div>
                <div className='w-full'>
                    <div>
                        <span className='text-white font-bold text-2xl ml-4'>Songs</span>
                    </div>
                    <div className='w-full mt-4'>
                        {
                            filteredSongs.map((song) => (
                                <div className='w-full ml-5 mt-1' key={song.id}>
                                    <PlaylistSongs image={song.album.images[0]?.url} song={song.name} artist={song.artists[0].name} duration_ms={song.duration_ms} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div>
                    <h1 className='text-white font-bold text-2xl'>Artists</h1>
                </div>
                <div className='grid grid-rows-1 grid-flow-col gap-3 mt-4'>

                    {filteredArtists.map((artist) => (
                        <div key={artist.id}>
                            <FountArtists image={artist.images[0]?.url} name={artist.name} type={artist.type} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-10'>
                <div>
                    <h1 className='text-white font-bold text-2xl'>Albums</h1>
                </div>
                <div className='grid grid-rows-1 grid-flow-col gap-3 mt-4'>

                    {filteredAlbums.map((album) => (
                        <div key={album.id}>
                            <FoundAlbums image={album.images[0]?.url} name={album.name} release={album.release_date} artist={album.artists[0]?.name} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-10'>
                <div>
                    <h1 className='text-white font-bold text-2xl'>Playlists</h1>
                </div>
                <div className='grid grid-rows-1 grid-flow-col gap-3 mt-4'>

                    {filteredPlaylists.map((playlist) => (
                        <div key={playlist.id}>
                            <FoundPlaylists image={playlist.images[0]?.url} name={playlist.name} by={playlist.owner.display_name} id={playlist.id}/>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default LoggedContainer