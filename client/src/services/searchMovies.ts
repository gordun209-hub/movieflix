const baseURL = 'https://imdb-api.com/en/API'
export const searchMovieQuery = async (search: string | undefined) => {
  const response = await fetch(`${baseURL}/Search/k_t0zj84io/${search}`)
  const data = await response.json()
  return data
}
export const searchGenreQuery = async (genre: string) => {
  const response = await fetch(
    `${baseURL}/AdvancedSearch/k_hd2hitvi/?genres=${genre}`
  )
  const data = await response.json()
  return data
}
