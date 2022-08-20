import { LoaderFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import LayoutInternal from '~/LayoutInternal'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import { SearchContext } from '~/src/contexts/search/SearchProvider'



const library = () => {

    const { searchUserPlaylist } = useContext(SearchContext)
    const { logged } = useContext(AuthContext)

    useEffect(() => {
        if (logged) {
            searchUserPlaylist()
        }
    }, [])

    return (
        <div>
            <LayoutInternal>
                <Outlet />
            </LayoutInternal>
        </div>
    )
}

export default library