import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import LibraryContainer from '~/src/components/library/LibraryContainer'
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
  const { variables } = useLoaderData()
  const { setVariables } = useContext(AuthContext)

  useEffect(() => {
    setVariables(variables)
  }, [])

  return (
    <div>
      <LibraryContainer />
    </div>
  )
}

export default index