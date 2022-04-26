export default async function fetchProps(params: { genre?: string }) {
  return fetch(
    `https://imdb-api.com/en/API/AdvancedSearch/k_t0zj84io/?genres=${params?.genre}`
  ).then(res => res.json())
}
