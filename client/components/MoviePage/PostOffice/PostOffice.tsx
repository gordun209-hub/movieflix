import { Box, Card, Divider, Typography } from '@mui/material'
import { FC } from 'react'

import { TBoxOffice } from '@/types/BoxOffice'

const BoxOffice: FC<TBoxOffice> = ({ budget, cumulativeWorldWideGross, grossUSA, openingWeekendUSA }) => {
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

					alignItems: 'center',
					width: '100%',
					height: '100%'
				}}
			>
				<Box>
					<Card key={grossUSA} variant='outlined'>
						{budget && <Typography variant='body1'>{budget}</Typography>}
						<Divider />
						<Typography variant='body1'>
							Opening weekend USA : {openingWeekendUSA === '' ? 'N/A' : openingWeekendUSA}
						</Typography>
						<Typography variant='body1'>Cumulative worldwide gorss: {cumulativeWorldWideGross}</Typography>
						<Typography variant='body1'>gross USA :{grossUSA === '' ? 'N/A' : grossUSA}</Typography>
					</Card>
				</Box>
			</Box>
		</Box>
	)
}
export default BoxOffice
