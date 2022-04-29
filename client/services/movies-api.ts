import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Top250Data } from 'types/top250Data'

import type { Movie, movieSearch } from '@/types/movieType'
import type { TStar } from '@/types/starType'
// https://imdb-api.com/en/API/Top250Movies/k_12345678
// export const apiKey = 'k_hd2hitvi'
export const apiKey = 'k_t0zj84io'
export const api = createApi({
	keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
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
		imDbTop250: builder.query<Top250Data, void>({
			query: () => ({
				url: `/Top250Movies/${apiKey}`,
				method: 'GET'
			})
		}),
		searchStar: builder.query({
			query: star => ({
				url: `SearchName/${apiKey}/${star}`,
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
	useImDbTop250Query,
	useSearchMovieByIdQuery,
	useSearchStarByIdQuery,
	useSearchStarQuery
} = api

export default api
