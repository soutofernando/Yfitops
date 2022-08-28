import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import LayoutInternal from '~/LayoutInternal'
import AlbumContainer from '~/src/components/album/AlbumContainer'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

export const loader: LoaderFunction = async ({ params }) => {
    return { albumId: params.albumId }
}

const album = () => {

    const { albumId } = useLoaderData()
    const { getAlbumDetails } = useContext(SearchContext)

    useEffect(() => {
        getAlbumDetails(albumId)

    }, [])

    return (
        <LayoutInternal>
            <AlbumContainer />
        </LayoutInternal>
    )
}

export default album