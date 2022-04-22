import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Movie, movieSearch } from '../types/movieType'

const apiKey = 'k_hd2hitvi'

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
    searchMovieById: builder.query<Movie, string | undefined>({
      query: id => ({
        url: `/Title/${apiKey}/${id}/FullActor,Posters,Trailer`,
        method: 'GET'
      })
    })
  })
})

export const { useSearchQuery, useGenresQuery, useSearchMovieByIdQuery } = api

export default api
