import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import { getRecommendations } from '~/src/features/types/ApiTypes'
import HomeLoggedOut from '../HomeLoggedOut'
import TrackSuggestion from './TrackSuggsetion'


const AlbumSuggestionContainer = () => {

    const { recommendations, searchInput } = useContext(SearchContext)

    return (
        <div className='text-white py-5'>
            {searchInput.length > 0 ?
                <div>
                    <div className='px-6'>
                        <Link className='hover:underline' to="/">
                            <span className='font-bold text-xl'>To accompany your night</span>
                        </Link>
                    </div>

                    <div className="max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-6">
                            {recommendations.map((recommendation: getRecommendations) => (
                                <div key={recommendation.id}>
                                    <TrackSuggestion name={recommendation.album.name} image={recommendation.album.images[0]?.url} date={recommendation.album.release_date} time={recommendation.duration_ms} href={recommendation.external_urls.spotify} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> : <HomeLoggedOut />}

        </div>
    )
}

export default AlbumSuggestionContainer