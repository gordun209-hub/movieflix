import { useRouter } from 'next/router'

import { useSearchStarQuery } from '@/services/movies-api'

const Actor = () => {
	const router = useRouter()
	const { actor } = router.query as { actor: string }
	const { data, error, isLoading } = useSearchStarQuery(actor)
	return (
		<div>
			<h1>{data && JSON.stringify(data)}</h1>
		</div>
	)
}

export default Actor
