import React from 'react'
import { Link } from 'react-router-dom'

const SPOTIFY_PODCASTS = [
    {
        id: 1,
        name: "Today's podcast",
        img: "https://i.scdn.co/image/ab6765630000ba8a42bb343164ee1a36bf0cc8df",
        description: "The bests podcasts in top global"
    },
    {
        id: 2,
        name: "Top Podcast in Brazil",
        img: "https://i.scdn.co/image/ab67616d0000b2738651824bb99912226aaa1dfc",
        description: "Top podcast in Brazil"
    },
    {
        id: 3,
        name: "Podcasts suggestions of Spotify",
        img: "https://assets.b9.com.br/wp-content/uploads/2020/07/cover-spotify4-1-1280x677.jpg",
        description: "The bests podcasts of Spotify"
    },
    {
        id: 4,
        name: "Top talks",
        img: "https://cdnb.artstation.com/p/assets/images/images/023/607/115/large/honey-grace-dela-pena-podcast-album-cover.jpg?1579747442",
        description: "Talk with Pastor Bong"
    },
    {
        id: 5,
        name: "Tops Podcasts",
        img: "https://engineering.atspotify.com/wp-content/uploads/sites/2/2022/02/0116-NerdOut_Podcast-Art_300x300.jpg",
        description: "Podcast"
    },
    {
        id: 6,
        name: "Lisen anywhare",
        img: "https://hospedario.com.br/wp-content/uploads/2020/08/Melhores-Podcasts-no-Spotify-Brasileiros.jpg",
        description: "Lisen while in the shower"
    }
]

const SpotifyPodcasts = () => {
    return (
        <div>
            <div className='mb-4'>
                <Link to="/" className='hover:underline text-white'>
                    <span className='text-white font-bold text-xl'>Tops Podcasts</span>
                </Link>
            </div>
            <div className='flex'>
                {SPOTIFY_PODCASTS.map((podcast) => (
                    <div className='p-6 bg-black-gray rounded-md hover:bg-black-gray-hover text-white w-48 h-64 ml-4' key={podcast.id} >
                        <div>
                            <img src={podcast.img} className="rounded-md h-36 " />
                        </div>
                        <div className='mt-4'>
                            <p className='text-white w-full text-lg font-bold overflow-hidden whitespace-nowrap text-ellipsis'>{podcast.name}</p>
                        </div>
                        <div className='mt-1 pb-10'>
                            <p className='text-gray-white font-semibold overflow-hidden whitespace-nowrap text-ellipsis'>{podcast.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SpotifyPodcasts