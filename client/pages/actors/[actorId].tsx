import { useRouter } from 'next/router'

const Actor = () => {
	const router = useRouter()
	const { actorId } = router.query as { actorId: string }
	return (
		<div>
			<h1>{actorId}</h1>
		</div>
	)
}

export default Actor
