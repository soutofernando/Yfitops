import { LoaderFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import LayoutInternal from '~/LayoutInternal'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

export const loader: LoaderFunction = async () => {
    return { variables : {
      "CLIENT_ID": process.env.CLIENT_ID,
      "REDIRECT_URI": process.env.REDIRECT_URI,
      "AUTH_ENDPOINT": process.env.AUTH_ENDPOINT,
    } }
  }

const library = () => {

    const { searchUserPlaylist, playlists } = useContext(SearchContext)
    const { logged } = useContext(AuthContext)
    const {variables} = useLoaderData()

    useEffect(() => {
        if (logged) {
            searchUserPlaylist()
        }
    }, [])

    return (
        <div>
            <LayoutInternal variables={variables}>
                <Outlet />
            </LayoutInternal>
        </div>
    )
}

export default library