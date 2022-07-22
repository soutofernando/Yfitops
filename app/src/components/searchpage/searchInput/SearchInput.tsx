import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const SearchInput = () => {
    return (
        <div className='text-white w-full flex bg-white rounded-full p-1 items-center'>
            <SearchIcon className='text-black w-7 h-7' />
            <input className='ml-3 rounded-full p-1 text-black w-full outline-none placeholder:text-black placeholder:text-sm' placeholder='Artists, songs, or podcasts' />
        </div>
    )
}

export default SearchInput