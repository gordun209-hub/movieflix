import type { Movie } from '../types/movieType'

export const sortMoviesByRating = movies => {
  return movies.sort((a, b) => {
    if (a.imDbRating < b.imDbRating) {
      return 1
    }
    if (a.imDbRating > b.imDbRating) {
      return -1
    }
    return 0
  })
}
