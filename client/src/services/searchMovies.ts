export const searchMovieQuery = async (search: string | undefined) => {
  const response = await fetch(
    `https://imdb-api.com/en/API/Search/k_t0zj84io/${search}`
  )
  const data = await response.json()
  return data
}
