type Tres = {
	id: string
	image: string
	description: string
	runtimeStr: string
	genres: string[]
	imDbRating: string
	plot: string
	stars: string
	imDbRatingVotes: string
	releaseDate: string
	title: string
}[]

export const sortedMovies = (data: Tres, sortBy: string) => {
	const movies = data

	switch (sortBy) {
		case 'title':
			return movies.sort((a, b) => a.title.localeCompare(b.title))
		case 'number-of-votes':
			return movies.sort((a, b) => Number.parseFloat(b.imDbRatingVotes) - Number.parseFloat(a.imDbRatingVotes))
		case 'imdb-rating':
			return movies.sort((a, b) => Number.parseFloat(b.imDbRating) - Number.parseFloat(a.imDbRating))

		default:
			return movies
	}
}
