import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const SearchSupport = () => {
    return (
        <div className='text-white w-full flex bg-white rounded-md p-2 items-center'>
            <SearchIcon className='text-black w-7 h-7' />
            <input className='ml-3 rounded-md p-2 text-black w-full outline-none placeholder:text-black placeholder:text-sm' placeholder='Search' />
        </div>
    )
}

export default SearchSupport