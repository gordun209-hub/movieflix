/* eslint-disable @typescript-eslint/ban-ts-comment */
import Box from '@mui/material/Box'
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
			<Box display={'flex'} justifyContent={'space-between'} pb={2}>
				<Box width={'100%'}>
					<GenreNav />
				</Box>
				<SelectItem />
			</Box>
			<Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} textAlign={'center'} gap={4}>
				{sortMovies?.map(movie => (
					<Box key={movie.id}>
						<Card img={movie.image} title={movie.title} id={movie.id} imDbRating={movie.imDbRating} />
					</Box>
				))}
			</Box>
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
