import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import type { ActorInfoWithImageProps } from '@/types/actorPageTypes'

const ActorInfoWithImage: FC<ActorInfoWithImageProps> = ({ data }) => {
	return (
		<Grid item xs={12} sm={4} display={'flex'} flexDirection={'column'} gap={3}>
			<Typography textAlign={'center'} variant='h4'>
				{data?.name}
			</Typography>
			<Image src={data?.image || ''} width={300} height={300} />
		</Grid>
	)
}
export default ActorInfoWithImage
