import { apiKey } from '@/services/movies-api'

export default async function fetchProps(params: { genre?: string }) {
	return fetch(`https://imdb-api.com/en/API/AdvancedSearch/${apiKey}/?genres=${params?.genre}`).then(res =>
		res.json()
	)
}
