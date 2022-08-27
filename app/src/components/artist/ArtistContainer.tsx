import React from 'react'
import FooterHome from '../home/footerHome/FooterHome'
import ArtistTracksContainer from './artistTracks/ArtistTracksContainer'
import HeroArtist from './heroArtist/HeroArtist'

const ArtistContainer = () => {
    return (
        <div>
            <div>
                <HeroArtist />
                <ArtistTracksContainer />
                <FooterHome />
            </div>
        </div>
    )
}

export default ArtistContainer