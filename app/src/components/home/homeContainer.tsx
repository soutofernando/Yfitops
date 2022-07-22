import React from 'react'
import AlbumSuggestionContainer from './albumSuggestion/AlbumSuggestionContainer'
import FooterHome from './footerHome/FooterHome'

const HomeContainer = () => {
  return (
    <div>
      <div className='bg-gray-black'>
        <AlbumSuggestionContainer />
        <AlbumSuggestionContainer />
        <AlbumSuggestionContainer />
        <FooterHome />
      </div>
    </div>
  )
}

export default HomeContainer