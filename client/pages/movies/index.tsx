import { GetStaticProps } from 'next'
import { FC } from 'react'

import { GenreNav } from '@/components/GenreNav'
import { Card } from '@/components/Movies'
import { apiKey } from '@/services/movies-api'
import type { PopularMovies } from '@/types/movieType'

const Movies: FC<PopularMovies> = ({ data }) => {
	return (
		<div className='grid  grid-flow-row gap-4 bg-slate-600'>
			<GenreNav />
			{data && (
				<div className='flex max-h-10 flex-wrap justify-evenly gap-6 bg-slate-600 text-center'>
					{data?.items.map(movie => (
						<Card
							key={movie.id}
							data-cy={movie.id}
							imDbRating={movie.imDbRating}
							img={movie.image}
							title={movie.title}
							id={movie.id}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const popularMovies = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`)
	const data = await popularMovies.json()
	return {
		props: {
			data
		},
		revalidate: 1
	}
}
export default Movies
