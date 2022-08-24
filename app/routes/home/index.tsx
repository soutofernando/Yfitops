import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import HomeContainer from '~/src/components/home/HomeContainer'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import { variablesAmbient } from '~/src/features/types/ApiTypes'



export const loader: LoaderFunction = async () => {
    return {
        variables: {
            "CLIENT_ID": process.env.CLIENT_ID,
            "REDIRECT_URI": process.env.REDIRECT_URI,
            "AUTH_ENDPOINT": process.env.AUTH_ENDPOINT,
        }
    }
}

const index = () => {
    const { variables } = useLoaderData<variablesAmbient>()
    const { getToken, setVariables, logged } = useContext(AuthContext)
    const { searchRecommendations, searchUserPlaylist } = useContext(SearchContext)

    useEffect(() => {
        getToken()
        searchRecommendations()
        searchUserPlaylist()
        setVariables(variables)
    }, [logged])

    return (
        <div>
            <HomeContainer />
        </div>
    )
}

export default index