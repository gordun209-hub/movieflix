import { useRouter } from 'next/router'
import * as React from 'react'

import { MovieUi } from '@/components/MoviePage'
import { Spinner } from '@/components/Spinner'

import { useSearchMovieByIdQuery } from '../../../services/movies-api'

export const Movies = () => {
	const router = useRouter()
	const { id } = router.query
	const { data, error, isLoading } = useSearchMovieByIdQuery(id)

	{
		isLoading && <Spinner />
	}
	{
		error && (error as Error).message
	}
	return (
		<>
			{data && (
				<>
					<MovieUi data={data} />
				</>
			)}
		</>
	)
}

export default Movies
