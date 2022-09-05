import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import FoundAlbums from '../foundAlbums/FoundAlbums'
import FountArtists from '../foundArtists/FoundArtists'
import FoundPlaylists from '../foundPlaylists/FoundPlaylists'
import PlaylistSong from '../playlistSong/PlaylistSong'
import TopResults from '../topResults/TopResults'


const SearchUser = () => {

    const { artists, playlists, tracks, albums, searchInput } = useContext(SearchContext)
    const filteredSongs = tracks.filter((song) => { return tracks.indexOf(song) < 4 })
    const filteredArtists = artists.filter((artist) => { return artists.indexOf(artist) < 6 })
    const filteredAlbums = albums.filter((album) => { return albums.indexOf(album) < 6 })
    const filteredPlaylists = playlists.filter((playlist) => { return playlists.indexOf(playlist) < 6 })



    return (
        <div>
            <div className='w-full xl:flex block'>
                <div className='flex-2 mb-4'>
                    <div>
                        <span className='text-white font-bold text-2xl '>Top Results</span>
                    </div>
                    <div className=''>
                        {
                            playlists[0] ? <div className='w-full mt-4'>
                                <TopResults topPlaylist={playlists[0]} />
                            </div> : <div />
                        }
                    </div>
                </div>
                <div className='flex-1 xl:ml-4 ml-0'>
                    <div>
                        <span className='text-white font-bold text-2xl ml-4'>Songs</span>
                    </div>
                    <div className='w-full mt-4'>
                        {
                            filteredSongs.map((song) => (
                                <div className='w-full mt-1' key={song.id}>
                                    <a href={song.external_urls.spotify}>
                                        <PlaylistSong image={song.album.images[0]?.url} song={song.name} artist={song.artists[0].name} duration_ms={song.duration_ms} />
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className='mt-10'>
                <div>
                    <h1 className='text-white font-bold text-2xl mb-4'>Artists</h1>
                </div>
                <div className="grid grid-cols-2 gap-y-6 gap-x-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-6">

                    {filteredArtists.map((artist) => (
                        <div key={artist.id} >
                            <Link to={`/artist/${artist.id}`}>
                                <FountArtists image={artist.images[0]?.url} name={artist.name} type={artist.type} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-10'>
                <div>
                    <h1 className='text-white font-bold text-2xl mb-4'>Albums</h1>
                </div>
                <div className="grid grid-cols-2 gap-y-6 gap-x-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-6">
                    {filteredAlbums.map((album) => (
                        <div key={album.id} >
                            <Link to={`/album/${album.id}`}>
                                <FoundAlbums image={album.images[0]?.url} name={album.name} release={album.release_date} artist={album.artists[0]?.name} />
                            </Link>
                        </div> 
                    ))}
                </div>
            </div>
            <div className='mt-10'>
                <div>
                    <h1 className='text-white font-bold text-2xl mb-4'>Playlists</h1>
                </div>
                <div className="grid grid-cols-2 gap-y-6 gap-x-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-6">
                    {filteredPlaylists.map((playlist) => (
                        <div key={playlist.id}>
                            <Link to={`/playlist/${playlist.id}`}>
                                <FoundPlaylists image={playlist.images[0]?.url} name={playlist.name} by={playlist.owner.display_name} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default SearchUser