export interface getArtistsProps {
    external_urls: { spotify: string }
    followers: { href: string, total: number }
    genres: string[]
    id: string
    name: string
    images: [{ heigth: number, url: string, width: number }]
    href: string
    popularity: string
    type: string
    uri: string
}

export interface getPlaylistsProps {
    external_urls: { spotify: string }
    description: string
    id: string
    images: [{ heigth: number, url: string, width: number }]
    name: string
    owner: { display_name: string, id: string, href: string }
    tracks: { total: number }
    type: string
    href: string

}

export interface getAlbumsProps {
    external_urls: { spotify: string }
    artists: [{ id: string, name: string }]
    images: [{ heigth: number, url: string, width: number }]
    name: string
    release_date: string
    total_tracks: number
    id: string
}

export interface getTracksProps {
    external_urls: { spotify: string }
    name: string
    album: { images: [{ heigth: number, url: string, width: number }] }
    artists: [{ name: string }]
    id: string
    duration_ms: number
}

export interface getUserPlaylists {
    id: string
    description: string
    external_urls: { spotify: string }
    href: string
    images: [
        { height: number, url: string, width: number }
    ]
    name: string
    public: boolean
    tracks: { href: string, total: number }
    owner: { display_name: string }

}

export interface getCategories {
    name: string
    id: string
    href: string
    icons: [{ url: string }]
}

export interface getPlaylistDetails {
    description: string
    name: string
    followers: { total: number }
    id: string
    owner: { display_name: string }
    public: boolean
    tracks: { total: number }
    type: string
    images: [{ url: string }]
}

export interface getTracksPlaylist {
    added_at: string
    track: {
        duration_ms: number
        name: string,
        id: string,
        external_urls:
        {
            spotify: string
        },
        album: { name: string, images: [{ url: string }] },
        artists: [
            {
                name: string
            }
        ]
    }
}
