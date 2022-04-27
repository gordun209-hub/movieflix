export default async function fetchProps(params: { genre?: string }) {
	return fetch(`https://imdb-api.com/en/API/AdvancedSearch/k_hd2hitvi/?genres=${params?.genre}`).then(res =>
		res.json()
	)
}
