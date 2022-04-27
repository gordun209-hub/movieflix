import { render, screen } from '@testing-library/react'

import Header from '@/components/MoviePage/Header/Header'

test('should render Header properyl', () => {
	render(
		<Header
			props={{
				title: 'title',
				imDbRating: '10',
				imdbRatingVotes: 'imdbRatingVotes',
				metacriticRating: 'metacriticRating',
				releaseDate: '104 laas',
				contentRating: 'pg',
				runtimeStr: '104 min'
			}}
		/>
	)
	expect(screen.getByText('title')).toBeInTheDocument()
	expect(screen.getByText(/104/i)).toBeInTheDocument()
	expect(screen.getByText(/pg/i)).toBeInTheDocument()
	expect(screen.getByText(/104/i)).toBeInTheDocument()
	expect(screen.getByText('10')).toBeInTheDocument()
	expect(screen.getByText('imdbRatingVotes')).toBeInTheDocument()
	expect(screen.getByText('metacriticRating')).toBeInTheDocument()
})

test('should render Header with no metacriticRating', () => {
	render(
		<Header
			props={{
				title: 'title',
				imDbRating: '10',
				imdbRatingVotes: 'imdbRatingVotes',
				metacriticRating: '',
				releaseDate: '2005',
				contentRating: 'contentRating',
				runtimeStr: '104 qwew'
			}}
		/>
	)
	expect(screen.getByText('title')).toBeInTheDocument()
	expect(screen.getByText(/2005/i)).toBeInTheDocument()
	expect(screen.getByText(/contentRating/i)).toBeInTheDocument()
	expect(screen.getByText(/104 /i)).toBeInTheDocument()
	expect(screen.getByText('10')).toBeInTheDocument()
	expect(screen.getByText('imdbRatingVotes')).toBeInTheDocument()
	expect(screen.queryByText('metacriticRating')).not.toBeInTheDocument()
})
