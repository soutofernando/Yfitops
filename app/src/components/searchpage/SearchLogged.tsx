import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import SearchUser from './loggedContainer/SearchUser'
import SearchCategories from './loggedContainer/SearchCategories'

const SearchLogged = () => {

    const { searchInput } = useContext(SearchContext)

    return (
        <div>
            {searchInput.length > 0 ? <SearchUser /> : <SearchCategories />}
        </div>
    )
}

export default SearchLogged