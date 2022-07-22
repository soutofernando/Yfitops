import { Outlet } from '@remix-run/react'
import React from 'react'
import LayoutInternal from '~/LayoutInternal'
import AlbumSuggestion from '~/src/components/home/albumSuggestion/AlbumSuggsetion'
import SearchContainer from '~/src/components/searchpage/SearchContainer'

const search = () => {
  return (
    <div>
        <LayoutInternal>
            <SearchContainer />
        </LayoutInternal>
    </div>
  )
}

export default search