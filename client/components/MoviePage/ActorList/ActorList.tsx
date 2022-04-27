import { Card, Divider } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import * as React from 'react'

import type { TActorList } from '@/types/actorList'

export default function ActorList({ actorList }: TActorList) {
	return (
		<Box>
			<Divider
				sx={{
					borderColor: 'gray.300',
					borderWidth: '1px',
					borderStyle: 'solid',
					margin: '20px 0px 20px 0px'
				}}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
					padding: '0px',
					margin: '0px'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'wrap',
						gap: '1rem'
					}}
				>
					{actorList.map(({ id, name, image, asCharacter }) => (
						<Card
							key={id}
							variant='outlined'
							sx={{
								maxWidth: '100px',
								textAlign: 'center'
							}}
						>
							<Image src={image} width={100} height={100} />
							{name === '' ? (
								<Typography variant='body1'>No name</Typography>
							) : (
								<Typography variant='body2'>{name}</Typography>
							)}

							<Divider />
							{asCharacter === '' ? (
								<Typography variant='body1'>No character</Typography>
							) : (
								<Typography variant='body1'>{asCharacter}</Typography>
							)}
						</Card>
					))}
				</Box>
			</Box>
		</Box>
	)
}
