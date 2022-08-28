interface getGlobal {
    external_urls: { spotify: string }
    name: string
    id: string
}

export interface getArtistsProps extends getGlobal {
    followers: { href: string, total: number }
    genres: string[]
    images: [{ heigth: number, url: string, width: number }]
    href: string
    popularity: string
    type: string
    uri: string
}

export interface getPlaylistsProps extends getGlobal {
    description: string
    images: [{ heigth: number, url: string, width: number }]
    owner: { display_name: string, id: string, href: string }
    tracks: { total: number }
    type: string
    href: string

}

export interface getAlbumsProps extends getGlobal {
    artists: [{ id: string, name: string }]
    images: [{ heigth: number, url: string, width: number }]
    release_date: string
    total_tracks: number
}

export interface getTracksProps extends getGlobal {
    album: { images: [{ heigth: number, url: string, width: number }] }
    artists: [{ name: string }]
    duration_ms: number
}

export interface getUserPlaylists extends getGlobal {
    description: string
    href: string
    images: [
        { height: number, url: string, width: number }
    ]
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

export interface getArtistDetails {
    external_urls: { spotify: string }
    name: string
    followers: { total: number }
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

export interface getArtistsTopsTracks extends getGlobal {
    duration_ms: number
    album: {
        images: [{ url: string }]
        release_date: string
        name: string
    }
}

export interface getRecommendations {
    album: {
        name: string
        images: [{ url: string }]
        id: string
        release_date: string
    }

    artists: [{
        id: string
        name: string

    }]
    duration_ms: number
    id: string
}

export interface getArtistAlbums extends getGlobal {
    images: [{ url: string }]
    release_date: string
    type: string
}

export interface getAlbumDetails extends getGlobal {
    album_type: string
    release_date: string
    total_tracks: number
    images: [{ url: string }]
    artists: [
        { name: string }
    ]
    duration_ms: number
    tracks: {
        items: [
            getAlbumTracks
        ]
    }
}

export interface getAlbumTracks extends getGlobal {
    artists: [
        { name: string }
    ]
    duration_ms: number
    disc_number: number
}



export interface variablesAmbient {
    variables: {
        CLIENT_ID: string
        REDIRECT_URI: string
        AUTH_ENDPOINT: string
    }
}
