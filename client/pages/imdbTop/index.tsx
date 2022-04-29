import { Box } from '@mui/material'

import { useAppSelector } from '@/app/hooks'
import { Top250Card, Top250SearchInput } from '@/components/Top250'
import { selectSelectedMovie } from '@/features/SelectTop250Movie/SelectTop250MovieReducer'
import { useImDbTop250Query } from '@/services/movies-api'

const ImdbTop = () => {
	const selectedMovieId = useAppSelector(selectSelectedMovie)

	const { data, error, isLoading } = useImDbTop250Query()
	const selectedMovie = data?.items?.find(movie => movie.id === selectedMovieId)
	if (isLoading) {
		return <Box>Loading...</Box>
	}
	if (error) {
		return <Box>Error!</Box>
	}
	if (selectedMovieId && data && selectedMovie) {
		return (
			<>
				<Top250SearchInput />
				<Top250Card movie={selectedMovie} />
			</>
		)
	}
	return (
		<>
			<Top250SearchInput />
			<Box display={'flex'} pt={2} justifyContent={'space-evenly'} flexWrap={'wrap'} gap={2} textAlign={'center'}>
				{data?.items.map(movie => (
					<Top250Card key={movie.id} movie={movie} />
				))}
			</Box>
		</>
	)
}

export default ImdbTop
