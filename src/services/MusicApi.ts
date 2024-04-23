import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const MusicApiHeader = {
  'X-RapidAPI-Key': '5312ed048amsh03ba71e9c5ebb31p10336djsnc538ae0495e9',
  'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
}

const baseUrl = 'https://deezerdevs-deezer.p.rapidapi.com'

const createRequest = (url: string) => ({ url, headers: MusicApiHeader })

export const musicApi = createApi({
  reducerPath: 'musicAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTopArtist: builder.query({
      query: (params) => createRequest(`/artist/${params}`),
    }),
    getTopArtistSong: builder.query({
      query: (params) => createRequest(`/search?q=${params}`),
    }),
    getArtist: builder.query({
      query: (params) => createRequest(`/search?q=${params}`),
    })
  }),
})

export const { useGetTopArtistQuery, useGetTopArtistSongQuery, useGetArtistQuery } = musicApi
