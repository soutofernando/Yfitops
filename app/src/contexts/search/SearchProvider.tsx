import React, { createContext, FC, useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import axios from 'axios'
import { END_POINT_CATEGORIES, END_POINT_GENERAL_SEARCH, END_POINT_RECOMMENDATIONS, END_POINT_USER_PLAYLIST } from '~/src/features/constants/ConstantsApi'
import { getAlbumsProps, getArtistsProps, getCategories, getPlaylistDetails, getPlaylistsProps, getTracksPlaylist, getTracksProps, getUserPlaylists } from '~/src/features/types/ApiTypes'

interface SearchProps {
    artists: getArtistsProps[]
    setArtists(array: getArtistsProps[]): void
    tracks: getTracksProps[]
    setTracks(array: getTracksProps[]): void
    playlists: getPlaylistsProps[]
    setPlaylists(array: getPlaylistsProps[]): void
    albums: getAlbumsProps[]
    setAlbums(array: getAlbumsProps[]): void
    recommendations: any[]
    setRecommendations(array: any[]): void
    categories: getCategories[]
    setCategories(array: getCategories[]): void
    playlistDetails: getPlaylistDetails
    setPlaylistDetails(array: getPlaylistDetails): void
    tracksPlaylist: getTracksPlaylist[]
    setTracksPlaylist(array: getTracksPlaylist[]): void
    userPlaylists: getUserPlaylists[]
    setUserPlaylists(array: getUserPlaylists[]): void

    searchInput: string
    setSearchInput(artist: string): void

    searchUserPlaylist(): void
    searchGeneral(): void
    searchRecommendations(): void
    searchCategories(): void
    getPlaylistDetails(id: string): void
    musicTime(time: number): string
    formatDate(date: string): string


}

export const SearchContext = createContext<SearchProps>({
    artists: [],
    setArtists: () => { },
    tracks: [],
    setTracks: () => { },
    playlists: [],
    setPlaylists: () => { },
    albums: [],
    setAlbums: () => { },
    userPlaylists: [],
    setUserPlaylists: () => { },
    searchInput: "",
    setSearchInput: () => { },
    searchUserPlaylist: () => { },
    searchGeneral: () => { },
    recommendations: [],
    setRecommendations: () => { },
    searchRecommendations: () => { },
    categories: [],
    setCategories: () => { },
    searchCategories: () => { },
    getPlaylistDetails: (id: string) => { },
    playlistDetails: {
        description: "",
        name: "",
        followers: { total: 0 },
        id: "",
        owner: { display_name: "" },
        public: false,
        tracks: { total: 0 },
        type: "",
        images: [{ url: "" }],
    },
    setPlaylistDetails: () => { },
    tracksPlaylist: [],
    setTracksPlaylist: () => { },
    musicTime: (time: number) => "",
    formatDate: (date: string) => "",

})

const SearchProvider: FC = ({ children }) => {

    const { token } = useContext(AuthContext)

    const [artists, setArtists] = useState<getArtistsProps[]>([])
    const [tracks, setTracks] = useState<any[]>([])
    const [playlists, setPlaylists] = useState<getPlaylistsProps[]>([])
    const [albums, setAlbums] = useState<getAlbumsProps[]>([])
    const [recommendations, setRecommendations] = useState<any[]>([])
    const [categories, setCategories] = useState<getCategories[]>([])
    const [playlistDetails, setPlaylistDetails] = useState<getPlaylistDetails>({
        description: "",
        name: "",
        followers: { total: 0 },
        id: "",
        owner: { display_name: "" },
        public: false,
        tracks: { total: 0 },
        type: "",
        images: [{ url: "" }],
    })
    const [tracksPlaylist, setTracksPlaylist] = useState<getTracksPlaylist[]>([])
    const [userPlaylists, setUserPlaylists] = useState<getUserPlaylists[]>([])
    const [searchInput, setSearchInput] = useState("")

    const artistsIds = playlists.map(({ id }) => { return id })
    const tracksIds = tracks.map(({ id }) => { return id })
    const artistsGenres = artists.map(({ genres }) => { return genres.toString() })
    const artistsGenresClear = artistsGenres.filter((genre) => { return genre != "" })
    const genresSelected = artistsGenresClear[Math.floor((Math.random() * artistsGenresClear.length))]
    const tracksSelected = tracksIds[Math.floor((Math.random() * tracksIds.length))]
    const artistsSelected = artistsIds[Math.floor((Math.random() * artists.length))]


    const searchRecommendations = async () => {
        await axios.get("https://api.spotify.com/v1/recommendations", {
            headers: {
                Authorization: `Bearer ${token}`
            }, params: {
                seed_artists: artistsSelected,
                seed_genres: genresSelected,
                seed_tracks: tracksSelected
            }
        }).then((res) => setRecommendations(res.data.tracks)).
            catch((error) => console.log(error))
    }

    const searchGeneral = async () => {
        const { data } = await axios.get(END_POINT_GENERAL_SEARCH, {
            headers: {
                Authorization: `Bearer ${token}`
            }, params: {
                q: searchInput,
                type: "track,artist,album,playlist",
            }
        })

        setArtists(data.artists.items)
        setPlaylists(data.playlists.items)
        setTracks(data.tracks.items)
        setAlbums(data.albums.items)

    }

    const searchUserPlaylist = async () => {
        await axios.get(END_POINT_USER_PLAYLIST, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => setUserPlaylists(res.data.items))
            .catch((error) => console.log(error))
    }

    const searchCategories = async () => {
        await axios.get(END_POINT_CATEGORIES, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => setCategories(res.data.categories.items))
            .catch((error) => console.log(error))
    }

    const getPlaylistDetails = async (id: string) => {

        const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        setPlaylistDetails(data)
        setTracksPlaylist(data.tracks.items)
    }

    const musicTime = (time: number) => {
        const minutes = (time / 60000).toFixed(2)
        const decimal = minutes.substring(2)
        const denominator = Math.round(parseInt(decimal) / 2)
        let denominatorStr = ""
        if (denominator < 10) {
            denominatorStr = "0" + denominator
        } else {
            denominatorStr = denominator.toString()
        }
        const mask = minutes.substring(0, 1) + ":" + denominatorStr
        return mask

    }

    const formatDate = (data: string) => {
        const year = data.substring(0, 4)
        const month = data.substring(5, 7)
        const day = data.substring(8, 10)
        const date = month + "/" + day + "/" + year
        return date
    }

    return (
        <SearchContext.Provider value={{
            artists,
            setArtists,
            tracks,
            setTracks,
            playlists,
            setPlaylists,
            albums,
            setAlbums,
            userPlaylists,
            setUserPlaylists,
            searchInput,
            setSearchInput,
            searchUserPlaylist,
            searchGeneral,
            recommendations,
            setRecommendations,
            searchRecommendations,
            categories,
            setCategories,
            searchCategories,
            getPlaylistDetails,
            playlistDetails,
            setPlaylistDetails,
            tracksPlaylist,
            setTracksPlaylist,
            musicTime,
            formatDate,
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider