import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import LayoutInternal from '~/LayoutInternal'
import ArtistContainer from '~/src/components/artist/ArtistContainer'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

export const loader: LoaderFunction = async ({ params }) => {
    return { artistId: params.artistId }
}

const artist = () => {
    const { artistId } = useLoaderData()
    const { getArtistDetails, getArtistTopTracks, artistAlbums, getArtistAlbums } = useContext(SearchContext)

    useEffect(() => {
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