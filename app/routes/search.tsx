import { LoaderFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import React, { useContext } from 'react'
import LayoutInternal from '~/LayoutInternal'


const search = () => {

  return (
    <div>
      <LayoutInternal >
        <Outlet />
      </LayoutInternal>
    </div>
  )
}

export default search