import { LoaderFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import LayoutInternal from '~/LayoutInternal'
import PlaylistDetailsContainer from '~/src/components/playlistDetails/PlaylistDetailsContainer';
import { AuthContext } from '~/src/contexts/auth/AuthProvider';

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
    const { checkLogged, setVariables } = useContext(AuthContext)
    const { getPlaylistDetails } = useContext(SearchContext)

    useEffect(() => {
        checkLogged()
        setVariables(variables)
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