import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import LayoutInternal from '~/LayoutInternal'
import AlbumContainer from '~/src/components/album/AlbumContainer'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

export const loader: LoaderFunction = async ({ params }) => {
    return {
        albumId: params.albumId,
        variables: {
            "CLIENT_ID": process.env.CLIENT_ID,
            "REDIRECT_URI": process.env.REDIRECT_URI,
            "AUTH_ENDPOINT": process.env.AUTH_ENDPOINT,
        }
    }
}


const album = () => {

    const { albumId, variables } = useLoaderData()
    const { getAlbumDetails } = useContext(SearchContext)
    const { checkLogged, setVariables } = useContext(AuthContext)

    useEffect(() => {
        setVariables(variables)
        checkLogged()
        getAlbumDetails(albumId)
    }, [])

    return (
        <LayoutInternal>
            <AlbumContainer />
        </LayoutInternal>
    )
}

export default album