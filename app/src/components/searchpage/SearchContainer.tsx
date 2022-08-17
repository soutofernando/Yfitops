import React, { useContext } from 'react'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import FooterHome from '../home/footerHome/FooterHome'
import LoggedContainer from './LoggedContainer'
import LoggedOutContainer from './LoggedOutContainer'




const SearchContainer = () => {

    const { searchInput,playlists } = useContext(SearchContext)
    const { logged } = useContext(AuthContext)

    return (
        <div className='p-8'>
            {console.log(playlists)}
            {
                logged == true && searchInput.length > 0 ?
                    <div>
                        <LoggedContainer />
                    </div>
                    :
                    <div>
                        <LoggedOutContainer />
                    </div>
            }
            <FooterHome />
        </div>
    )
}

export default SearchContainer