import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import LayoutInternal from '~/LayoutInternal'
import ArtistContainer from '~/src/components/artist/ArtistContainer'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

export const loader: LoaderFunction = async ({ params }) => {
    return {
        artistId: params.artistId,
        variables: {
            "CLIENT_ID": process.env.CLIENT_ID,
            "REDIRECT_URI": process.env.REDIRECT_URI,
            "AUTH_ENDPOINT": process.env.AUTH_ENDPOINT,
        }
    }
}

const artist = () => {
    const { artistId, variables } = useLoaderData()
    const { checkLogged, setVariables } = useContext(AuthContext)
    const { getArtistDetails, getArtistTopTracks, getArtistAlbums } = useContext(SearchContext)

    useEffect(() => {
        checkLogged()
        setVariables(variables)
        getArtistDetails(artistId)
        getArtistTopTracks(artistId)
        getArtistAlbums(artistId)
    }, [])

    return (
        <div>
            <LayoutInternal>
                <ArtistContainer />
            </LayoutInternal>
        </div>
    )
}

export default artist