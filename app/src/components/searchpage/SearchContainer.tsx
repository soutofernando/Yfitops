import React, { useContext } from 'react'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import FooterHome from '../home/footerHome/FooterHome'
import SearchLogged from './SearchLogged'
import SearchLoggedOut from './SearchLoggedOut'

const SearchContainer = () => {

    const { logged } = useContext(AuthContext)

    return (
        <div className='lg:p-8 md:p-4 p-2'>
            {
                logged ?
                    <div>
                        <SearchLogged />
                    </div>
                    :
                    <div>
                        <SearchLoggedOut />
                    </div>
            }
            <FooterHome />
        </div>
    )
}

export default SearchContainer