import { Box, Card, Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Spinner } from '@/components/Spinner'
import { useSearchStarByIdQuery } from '@/services/movies-api'

const Actor = () => {
	const router = useRouter()

	const { actorId } = router.query as { actorId: string }
	const { data, error, isLoading } = useSearchStarByIdQuery(actorId)
	if (isLoading) return <Spinner />
	if (error) return <h1>{(error as Error).message} </h1>

	return (
		<Box px={20} pt={4} width={'100%'} bgcolor={'dodgerblue'}>
			<Card variant='outlined'>
				<Grid container direction='row' gap={4} alignItems='center'>
					<Grid item xs={12} sm={4}>
						<Typography textAlign={'center'} variant='h4'>
							{data?.name}
						</Typography>
						<Image src={data?.image || ''} width={300} height={300} />
					</Grid>
					<Grid item xs={12} sm={4}>
						<Grid direction='column'>
							<Grid item>
								<Divider />
								<Typography variant='body1'>awards :{data?.awards || ''}</Typography>
								<Divider />
								<Typography variant='body1'> summary :{data?.summary || ''}</Typography>
							</Grid>
							<Grid item>
								<Divider />
								<Typography variant='body1'> birthDate : {data?.birthDate || ''}</Typography>
								<Divider />

								<Typography variant='body1'> death : {data?.deathDate || 'N/A'}</Typography>
								<Divider />

								<Typography variant='body1'>roles: {data?.role || ''}</Typography>
								<Divider />

								<Typography variant='body1'> height: {data?.height || ''}</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Card>
		</Box>
	)
}

export default Actor

//  export type TStar = {
// 		id: string
// 		name: string
// 		role: string
// 		image: string
// 		summary: string
// 		birthDate: string
// 		deathDate: string | null
// 		awards: string
// 		height: string
// 		knownFor: {
// 			id: string
// 			title: string
// 			fullTitle: string
// 			year: string
// 			role: string
// 			image: string
// 		}[]
// 		castMovies: {
// 			id: string
// 			role: string
// 			title: string
// 			year: string
// 			description: string
// 		}[]
// 		errorMessage: string | null
//  }
