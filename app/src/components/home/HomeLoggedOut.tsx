import React from 'react'
import { Link } from 'react-router-dom'
import SpotifyPlaylists from './homeLoggedOut/SpotifyPlaylists'
import SpotifyPodcasts from './homeLoggedOut/SpotifyPodcasts'


const HomeLoggedOut = () => {
    return (
        <div className='md:p-8 p-4'>
            <div>
                <SpotifyPlaylists />
            </div>

            <div className='mt-4'>
                <SpotifyPodcasts />
            </div>
        </div>
    )
}

export default HomeLoggedOut