/* eslint-disable react/destructuring-assignment */
import { Box, Divider, Typography } from '@mui/material'
import Image from 'next/image'

import type { Top250Movie } from '@/types/top250Data'

const Top250Card = (movie: Top250Movie): JSX.Element => {
	const { crew, imDbRating, image, rank, title } = movie.movie
	return (
		<Box key={rank} display={'flex'} maxWidth={'150px'} bgcolor={'ThreeDFace'} data-cy={rank}>
			<Box textAlign='match-parent'>
				<Box>
					<Typography>Rank: {rank}</Typography>
					<Image src={image} width={150} height={150} />
				</Box>
				<Box>
					<Typography>{title} </Typography>
					<Divider />
					<Typography> imdb: {imDbRating}</Typography>
					<Divider />
					<Typography> crew: {crew}</Typography>
				</Box>
			</Box>
		</Box>
	)
}
export default Top250Card
