import React from 'react'
import { Link } from 'react-router-dom'
import AlbumSuggestion from './AlbumSuggsetion'


const AlbumSuggestionContainer = () => {
    return (
        <div className='text-white py-5'>
            <div className='px-6'>
                <Link className='hover:underline' to="/">
                    <span className='font-bold text-xl'>To accompany your night</span>
                </Link>
            </div>
            <div className='py-8'>
                <AlbumSuggestion />
            </div>
        </div>
    )
}

export default AlbumSuggestionContainer