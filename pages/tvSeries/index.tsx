import { Box } from '@mui/material'
import { GetStaticProps } from 'next'
import { FC } from 'react'

import { GenreNav } from '@/components/GenreNav'
import { Card } from '@/components/Movies'
import { apiKey } from '@/services/movies-api'
import { Top250Data } from '@/types/top250Data'

type PopularTVs = {
	data: Top250Data
}
const TvSeries: FC<PopularTVs> = ({ data }) => {
	return (
		<Box bgcolor={'rgb(100 100 139 / var(--tw-bg-opacity))'}>
			<GenreNav />
			{data && (
				<Box
					display={'flex'}
					pt={2}
					justifyContent={'space-evenly'}
					flexWrap={'wrap'}
					gap={2}
					textAlign={'center'}
				>
					{data?.items.map((movie: { id: string; imDbRating: string; image: string; title: string }) => (
						<Card
							key={movie.id}
							data-cy={movie.id}
							imDbRating={movie.imDbRating}
							img={movie.image}
							title={movie.title}
							id={movie?.id}
						/>
					))}
				</Box>
			)}
		</Box>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const popularMovies = await fetch(`https://imdb-api.com/en/API/Top250TVs/${apiKey}`)
	const data = await popularMovies.json()
	return {
		props: {
			data
		},
		revalidate: 1
	}
}
export default TvSeries
