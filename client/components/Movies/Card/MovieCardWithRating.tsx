import { Box, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import * as React from 'react'

import { CardProps } from '@/types/CardProps'

const Card: FC<CardProps> = ({ id, img, imDbRating, title }) => {
	return (
		<Box display={'flex'} maxWidth={'150px'} height={'100%'} bgcolor={'ThreeDFace'} data-cy={id}>
			<Link passHref href={`/movies/movie/${id}`}>
				<Box textAlign='match-parent'>
					<Box>
						<Image src={img} width={150} height={150} />
					</Box>
					<Box>
						<Typography>{title} </Typography>
						<Divider />
						<Typography> Imdb : {imDbRating ? imDbRating : 'N/A'}</Typography>
					</Box>
				</Box>
			</Link>
		</Box>
	)
}
export default Card
