import { LoaderFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import React, { useContext } from 'react'
import LayoutInternal from '~/LayoutInternal'

export const loader: LoaderFunction = async () => {
  return {
    variables: {
      "CLIENT_ID": process.env.CLIENT_ID,
      "REDIRECT_URI": process.env.REDIRECT_URI,
      "AUTH_ENDPOINT": process.env.AUTH_ENDPOINT,
    }
  }
}

const search = () => {

  const { variables } = useLoaderData()

  return (
    <div>
      <LayoutInternal variables={variables}>
        <Outlet />
      </LayoutInternal>
    </div>
  )
}

export default search