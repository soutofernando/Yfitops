import React from 'react'
import { Link } from 'react-router-dom'

const SPOTIFY_PLAYLISTS = [
    {
        id: 1,
        name: "Today's Top Hits",
        img: "http://www.iuxancds.net/wp-content/uploads/2020/11/CAPATARCISIONOVO.jpg",
        description: "Tarcision Do acordeon in Top 1 of Brazil"
    },
    {
        id: 2,
        name: "Top Piseiro Hits",
        img: "https://images.suamusica.com.br/fSX0uyIZSA3_Zqi_-pV-ZZGfd8I=/500x500/47917586/3257450/cd_cover.jpg",
        description: "João gomes in Top 10 of Brazil"
    },
    {
        id: 3,
        name: "Top global Hits",
        img: "https://images.suamusica.com.br/3N0Z2n0nG4KEG2Xt9IMuuDD4Frs=/500x500/39174026/3489590/cd_cover.jpg",
        description: "Natanzinho in global hits"
    },
    {
        id: 4,
        name: "Top Sofrência Hits",
        img: "https://images.suamusica.com.br/B7UyRa6SpsM9txWNXQcd5Q_uSHw=/300x300/34674871/3655940/cd_cover.jpg?1",
        description: "Mari fernandes in Top 1 Sofrência hits"
    },
    {
        id: 5,
        name: "Top Piseiro Hits",
        img: "https://i.scdn.co/image/ab67616d0000b2735e574a5387c5d9997514b698",
        description: "Zé vaqueiro in Top 10 hits Piseiro"
    },
    {
        id: 6,
        name: "Today's Top Hits Brazil",
        img: "https://ifolha.com.br/wp-content/uploads/2022/02/MUSICA-WS-On-Board-01-02-22.jpg",
        description: "Ws in Top Brazil hits"
    }
]

const SpotifyPlaylists = () => {
    return (
        <div >
            <div className='mb-4'>
                <Link to="/" className='hover:underline text-white'>
                    <span className='text-white font-bold text-xl'>Spotify Playlists</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-y-6 gap-x-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-6">
                {SPOTIFY_PLAYLISTS.map((playlist) => (
                    <div className='hover:transition-all p-4 bg-black-gray rounded-md hover:bg-black-gray-hover text-white w-full h-72' key={playlist.id}>
                        <div>
                            <img src={playlist.img} className="rounded-md h-40 w-full" />
                        </div>
                        <div className='mt-4'>
                            <p className='text-white w-full text-lg font-bold overflow-hidden whitespace-nowrap text-ellipsis'>{playlist.name}</p>
                        </div>
                        <div className='mt-1 pb-10'>
                            <p className='text-gray-white font-semibold overflow-hidden whitespace-nowrap text-ellipsis'>{playlist.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SpotifyPlaylists