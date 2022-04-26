import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Movie, movieSearch } from '../types/movieType'
import type { TStar } from '../types/starType'

// const apiKey = 'k_hd2hitvi'
const apiKey = 'k_t0zj84io'
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://imdb-api.com/en/API'
  }),
  endpoints: builder => ({
    search: builder.query<movieSearch, string | undefined>({
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
    }),
    searchMovieById: builder.query<Movie, string | undefined | string[]>({
      query: id => ({
        url: `/Title/${apiKey}/${id}/FullActor,Posters,Trailer`,
        method: 'GET'
      })
    }),
    searchStarById: builder.query<TStar, string>({
      query: id => ({
        url: `https://imdb-api.com/en/API/Name/${apiKey}/${id}`,
        method: 'GET'
      })
    })
  })
})

export const {
  useSearchQuery,
  useGenresQuery,
  useSearchMovieByIdQuery,
  useLazySearchStarByIdQuery
} = api

export default api
