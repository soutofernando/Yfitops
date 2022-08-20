import { LoaderFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import LayoutInternal from '~/LayoutInternal'
import PlaylistDetailsContainer from '~/src/components/playlistDetails/PlaylistDetailsContainer';

import { SearchContext } from '~/src/contexts/search/SearchProvider';


export const loader: LoaderFunction = async ({ params }) => {
    return {
        playlistId: params.playlistId,
    }
};

const playlist = () => {

    const { playlistId } = useLoaderData()
    const { getPlaylistDetails } = useContext(SearchContext)

    useEffect(() => {
        getPlaylistDetails(playlistId)
    }, [])

    return (
        <div>
            <LayoutInternal >
                <PlaylistDetailsContainer />
            </LayoutInternal>
        </div>
    )
}

export default playlist