import React, { useContext } from 'react'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import LoggedOutModal from '../common/loggedOutModal/LoggedOutModal'
import AlbumSuggestionContainer from './albumSuggestion/AlbumSuggestionContainer'
import ArtistsSuggestionContainer from './artistsSuggestions/ArtistsSuggestionContainer'
import FooterHome from './footerHome/FooterHome'
import HomeLogged from './HomeLogged'
import HomeLoggedOut from './HomeLoggedOut'

const HomeContainer = () => {

  const { logged } = useContext(AuthContext)

  return (
    <div>
      <div className='bg-black-gray-2'>
        {logged ? <HomeLogged /> : <HomeLoggedOut />}
        <FooterHome />
      </div>
    </div>
  )
}

export default HomeContainer