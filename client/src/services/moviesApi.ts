import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//    https://imdb-api.com/en/API/SearchMovie//inception 2010
//https://imdb-api.com/en/API/Search/k_t0zj84io/${search}
//    https://imdb-api.com/en/API/SearchEpisode//London
const apiKey = 'k_hd2hitvi'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://imdb-api.com/en/API'
  }),
  endpoints: builder => ({
    search: builder.query({
      query: searchString => ({
        url: `/Search/${apiKey}/${searchString}`,
        method: 'GET'
      })
    }),
    genres: builder.query({
      query: genre => ({
        url: `/Genre/${apiKey}/${genre}`,
        method: 'GET'
      })
    })
  })
})

export const { useSearchQuery } = api

export default api
