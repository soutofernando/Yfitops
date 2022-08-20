import React from 'react'
import AlbumSuggestionContainer from './albumSuggestion/AlbumSuggestionContainer'
import ArtistsSuggestionContainer from './artistsSuggestions/ArtistsSuggestionContainer'
import FooterHome from './footerHome/FooterHome'

const HomeContainer = () => {
  return (
    <div>
      <div className='bg-gray-black'>
        <div>
          <AlbumSuggestionContainer />
        </div>
        <div>
          <ArtistsSuggestionContainer />
        </div>
        <FooterHome />
      </div>
    </div>
  )
}

export default HomeContainer