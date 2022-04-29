import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Link from 'next/link'

const GenreNav = () => {
	const genres = ['action', 'family', 'comedy', 'horror', 'animation', 'drama']

	return (
		<Stack spacing={2} pt={2} display={'flex'} justifyContent={'space-evenly'} direction={'row'}>
			{genres.map(genre => (
				<Link key={`/movies/${genre}`} passHref href={`/movies/${genre}`}>
					<Button key={genre} variant='contained' data-cy={genre}>
						<Typography>{genre}</Typography>
					</Button>
				</Link>
			))}
		</Stack>
	)
}
export default GenreNav
