import { Box, Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'

import { ActorInfoWithImage, ActorInfoWithText } from '@/components/ActorPage'
import { Spinner } from '@/components/Spinner'
import { useSearchStarByIdQuery } from '@/services/movies-api'

const Actor = () => {
	const router = useRouter()

	const { actorId } = router.query as { actorId: string }
	const { data, error, isLoading } = useSearchStarByIdQuery(actorId)
	if (isLoading) return <Spinner />
	if (error) return <h1>{(error as Error).message} </h1>

	return (
		<Box px={20} pt={4} width={'100%'} height={'100vh'} bgcolor={'dodgerblue'}>
			<Card variant='outlined'>
				<Grid
					container
					direction='row'
					gap={4}
					justifyContent={'space-evenly'}
					p={12}
					bgcolor={'aliceblue'}
					alignItems='center'
				>
					{<ActorInfoWithImage data={data} />}
					<Grid item xs={12} sm={4}>
						<Grid direction='column'>{<ActorInfoWithText data={data} />}</Grid>
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
