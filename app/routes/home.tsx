import { Outlet } from '@remix-run/react'
import React from 'react'


const home = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default home