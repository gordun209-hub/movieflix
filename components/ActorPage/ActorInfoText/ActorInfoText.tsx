import { Divider, Grid, Typography } from '@mui/material'
import { FC } from 'react'

import type { ActorInfoTextProps } from '@/types/actorPageTypes'

const ActorInfoText: FC<ActorInfoTextProps> = ({ data }) => {
	return (
		<Grid item>
			<Grid item>
				<Divider />
				<Typography sx={{ mt: 0.5, ml: 2 }} variant='body1'>
					awards :{data?.awards || ''}
				</Typography>
				<Divider />
				<Typography sx={{ mt: 0.5, ml: 2 }} variant='body1'>
					summary :{data?.summary || ''}
				</Typography>
			</Grid>
			<Divider />
			<Typography sx={{ mt: 0.5, ml: 2 }} variant='body1'>
				birthDate: {data?.birthDate || ''}
			</Typography>
			<Divider />

			<Typography sx={{ mt: 0.5, ml: 2 }} variant='body1'>
				death: {data?.deathDate || 'N/A'}
			</Typography>
			<Divider />

			<Typography sx={{ mt: 0.5, ml: 2 }} variant='body1'>
				roles: {data?.role || ''}
			</Typography>
			<Divider />

			<Typography sx={{ mt: 0.5, ml: 2 }} variant='body1'>
				height: {data?.height || ''}
			</Typography>
		</Grid>
	)
}

export default ActorInfoText
