import React from 'react'
import LayoutInternal from '~/LayoutInternal'
import HomeContainer from '~/src/components/home/homeContainer'

const index = () => {
    return (
        <div>
            <LayoutInternal>
                <HomeContainer />
            </LayoutInternal>
        </div>
    )
}

export default index