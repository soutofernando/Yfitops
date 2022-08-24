import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface SuggestionPlaylistProps{
    name: string
    id: string
}

const SuggestionPlaylist: FC<SuggestionPlaylistProps> = ({name,id}) => {
    return (
        <div>
            <Link to={`/playlist/${id}`}>
                <span className='text-gray-white font-medium hover:text-white transition-all'>{name}</span>
            </Link>
        </div>
    )
}

export default SuggestionPlaylist