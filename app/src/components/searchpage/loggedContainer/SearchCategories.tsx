import React, { useContext, useEffect } from 'react'
import { AuthContext } from '~/src/contexts/auth/AuthProvider'
import { SearchContext } from '~/src/contexts/search/SearchProvider'
import Categorie from '../categories/Categorie'

const SearchCategories = () => {


    const { searchCategories, categories } = useContext(SearchContext)
    const { logged } = useContext(AuthContext)

    useEffect(() => {
        searchCategories()
    }, [logged])

    return (
        <div>
            <div>
                <span className='text-white font-bold text-2xl '>Browse all</span>
            </div>
            <div className='mt-10'>
                <div className="grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-6">
                    {
                        categories.map((categorie) => (
                            <div key={categorie?.id}>
                                <Categorie name={categorie?.name} id={categorie?.id} href={categorie?.href} icon={categorie?.icons[0]?.url} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchCategories