import { Link } from '@remix-run/react'
import React, { useContext } from 'react'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import { getRecommendations } from '~/src/features/types/ApiTypes'
import ArtistSuggestion from './ArtistSuggestion'

const ArtistsSuggestionContainer = () => {

    const { recommendations } = useContext(SearchContext)

    return (
        <div>
            <div className='text-white py-5'>
                <div className='px-6'>
                    <Link className='hover:underline' to="/">
                        <span className='font-bold text-xl'>Your Top mixes</span>
                    </Link>
                </div>

                <div className="max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-6">
                        {recommendations.map((recommendation: getRecommendations) => (
                            <div key={recommendation.id}>
                                <ArtistSuggestion name={recommendation.artists[0].name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistsSuggestionContainer