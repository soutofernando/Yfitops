import { SearchIcon } from '@heroicons/react/outline'
import React, { useContext, useEffect } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'

const SearchInput = () => {

    const { setSearchInput, searchGeneral, searchInput } = useContext(SearchContext)

    useEffect(() => {
        if (searchInput.length > 0) {
            searchGeneral()
        }
    }, [searchInput])

    return (
        <div className='text-white w-full flex bg-white rounded-full p-1 items-center'>
            <button >
                <SearchIcon className='text-black w-7 h-7' />
            </button>
            <input onChange={(e) => setSearchInput(e.target.value)} value={searchInput} type="text" name="searchInput" className='ml-3 rounded-full p-1 text-black w-full outline-none placeholder:text-black placeholder:text-sm' placeholder='Artists, songs, or podcasts' />
        </div>
    )
}

export default SearchInput