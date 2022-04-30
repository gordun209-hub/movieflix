/* eslint-disable react/destructuring-assignment */
import { Box, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import type { Top250Movie } from '@/types/top250Data'

const Top250Card = (movie: Top250Movie): JSX.Element => {
	const { crew, imDbRating, image, rank, title, id } = movie.movie
	return (
		<Link passHref href={`/movies/movie/${id}`}>
			<Box key={rank} display={'flex'} justifyContent={'center'} bgcolor={'ThreeDFace'} data-cy={rank}>
				<Box>
					<Box>
						<Typography>Rank: {rank}</Typography>
						<Image src={image} width={150} height={150} />
					</Box>
					<Box maxWidth={'150px'} textAlign={'center'}>
						<Typography>{title} </Typography>
						<Divider />
						<Typography> imdb: {imDbRating}</Typography>
						<Divider />
						<Typography> crew: {crew}</Typography>
					</Box>
				</Box>
			</Box>
		</Link>
	)
}
export default Top250Card
