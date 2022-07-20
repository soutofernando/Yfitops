import React from 'react'
import Footer from '../common/Footer'
import AlbumSuggestionContainer from './albumSuggestion/AlbumSuggestionContainer'
import AlbumSuggestion from './albumSuggestion/AlbumSuggsetion'
import IncentiveSignUp from './incentiveSignUp/IncentiveSignUp'
import NavigationMenu from './navigationMenu/NavigationMenu'
import NavigationSideMenu from './navigationSideMenu/NavigationSideMenu'

const HomeContainer = () => {
  return (
    <div>
      <div className='flex'>
        <div className='flex-2 bg-black'>
          <div className='sticky top-0'>
            <NavigationSideMenu />
          </div>
        </div>
        <div className='flex-1'>
          <div className='sticky top-0'>
            <NavigationMenu />
          </div>
          <div>
            <AlbumSuggestionContainer />
            <AlbumSuggestionContainer />
            <AlbumSuggestionContainer />
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 w-full'>
        <IncentiveSignUp />
      </div>
    </div>
  )
}

export default HomeContainer