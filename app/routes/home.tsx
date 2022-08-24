import { Outlet, useLoaderData } from '@remix-run/react'
import React from 'react'
import LayoutInternal from '~/LayoutInternal'

const home = () => {

  return (
    <div>
      <LayoutInternal >
        <Outlet />
      </LayoutInternal>
    </div>
  )
}

export default home