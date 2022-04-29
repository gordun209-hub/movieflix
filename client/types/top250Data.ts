export type Top250Data = {
	errorMessage: string
	items: {
		id: string
		crew: string
		fullTitle: string
		imDbRating: string
		imDbRatingCount: string
		image: string
		rank: string
		title: string
		year: string
	}[]
}

export type Top250Movie = {
	movie: {
		id: string
		crew: string
		fullTitle: string
		imDbRating: string
		imDbRatingCount: string
		image: string
		rank: string
		title: string
		year: string
	}
}
