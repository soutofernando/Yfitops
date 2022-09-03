import { LoaderFunction, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import SearchContainer from '~/src/components/searchpage/SearchContainer'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

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

    const { setVariables, checkLogged, logged } = useContext(AuthContext)
    const { variables } = useLoaderData()

    useEffect(() => {
        checkLogged()
        setVariables(variables)
    }, [logged])

    return (
        <div>
            {console.log("search:" +logged)}
            <SearchContainer />
        </div>
    )
}

export default index