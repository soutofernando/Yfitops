import { Outlet } from '@remix-run/react'
import React from 'react'
import LayoutInternal from '~/LayoutInternal'


const library = () => {
    return (
        <div>
            <LayoutInternal>
                <Outlet />
            </LayoutInternal>
        </div>
    )
}

export default library