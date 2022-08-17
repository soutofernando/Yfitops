import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect, useState } from 'react'
import LayoutInternal from '~/LayoutInternal'
import HomeContainer from '~/src/components/home/homeContainer'
import axios from 'axios'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import { SearchContext } from '~/src/contexts/search/SearchProvider'




const index = () => {

    const { getToken } = useContext(AuthContext)
    const { searchRecommendations, recommendations } = useContext(SearchContext)

    useEffect(() => {
        getToken()
        searchRecommendations()
    }, [])

    return (
        <div>
            <HomeContainer />
        </div>
    )
}

export default index