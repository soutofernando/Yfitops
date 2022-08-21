import React, { useContext } from 'react'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import FooterHome from '../home/footerHome/FooterHome'
import LibraryLogged from './LibraryLogged'
import LibraryLoggedOut from './LibraryLoggedOut'

const LibraryContainer = () => {


    const { logged } = useContext(AuthContext)

    return (
        <div className='p-8 w-full'>
            <div>
                {logged == true ? <LibraryLogged /> : <LibraryLoggedOut />}
            </div>
            <FooterHome />
        </div>
    )
}

export default LibraryContainer