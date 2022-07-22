import React from 'react'
import FooterHome from '../home/footerHome/FooterHome'
import PossibleAlbums from './possibleAlbums/PossibleAlbums'

const SearchContainer = () => {
    return (
        <div>
            <div>
                <span className='text-white font-bold text-2xl p-12'>Browse all</span>
            </div>
            <div className='mt-6'>
                <PossibleAlbums />
            </div>
            <div className='mt-6'>
                <PossibleAlbums />
            </div>
            <div className='mt-6'>
                <PossibleAlbums />
            </div>
            <FooterHome />
        </div>
    )
}

export default SearchContainer