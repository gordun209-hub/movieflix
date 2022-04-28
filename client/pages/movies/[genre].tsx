/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { useAppSelector } from '@/app/hooks'
import { GenreNav } from '@/components/GenreNav'
import { Card, SelectItem } from '@/components/Movies'
import { selectSortBy } from '@/features/FilterContentBy/FilterContentBy'
import type { SearchByGenreType } from '@/types/movieType'
import fetchProps from '@/utils/fetchProps'
import { sortedMovies } from '@/utils/sortMovies'

const GenrePage: NextPage<SearchByGenreType> = ({ data }: SearchByGenreType) => {
	const sortBy = useAppSelector(selectSortBy)
	const sortMovies = sortedMovies(data?.results, sortBy)

	return (
		<>
			<GenreNav />
			<SelectItem />
			<div className='flex  min-w-full flex-wrap justify-center gap-4   text-center'>
				{sortMovies?.map(movie => (
					<div key={movie.id}>
						<Card img={movie.image} title={movie.title} id={movie.id} imDbRating={movie.imDbRating} />
					</div>
				))}
			</div>
		</>
	)
}

export default GenrePage

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: [
		{
			params: {
				genre: 'action'
			}
		},
		{
			params: {
				genre: 'family'
			}
		},
		{
			params: {
				genre: 'comedy'
			}
		},
		{
			params: {
				genre: 'horror'
			}
		},
		{
			params: {
				genre: 'animation'
			}
		},
		{
			params: {
				genre: 'drama'
			}
		}
	],

	fallback: false
})

export const getStaticProps: GetStaticProps = async ({ params: parameters }) => {
	//@ts-ignore
	const data = await fetchProps(parameters)

	return {
		props: {
			data
		}
	}
}
