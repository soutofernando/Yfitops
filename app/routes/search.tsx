import { Outlet } from '@remix-run/react'
import React from 'react'
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