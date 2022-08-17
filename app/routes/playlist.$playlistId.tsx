import { LoaderFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import LayoutInternal from '~/LayoutInternal'
import PlaylistDetailsContainer from '~/src/components/playlistDetails/PlaylistDetailsContainer';

import { SearchContext } from '~/src/contexts/search/SearchProvider';


export const loader: LoaderFunction = async ({ params }) => {
    return {
        playlistId: params.playlistId,
        variables: {
            "CLIENT_ID": process.env.CLIENT_ID,
            "REDIRECT_URI": process.env.REDIRECT_URI,
            "AUTH_ENDPOINT": process.env.AUTH_ENDPOINT,
        }
    }
};

const playlist = () => {

    const { playlistId, variables } = useLoaderData()
    const { getPlaylistDetails } = useContext(SearchContext)

    useEffect(() => {
        getPlaylistDetails(playlistId)
    }, [])

    return (
        <div>
            <LayoutInternal variables={variables}>
                <PlaylistDetailsContainer />
            </LayoutInternal>
        </div>
    )
}

export default playlist