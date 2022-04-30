import GenrePage from '@/pages/movies/[genre]'
import { render, screen } from '@/utils/testUtils'

const mockData = {
	results: [
		{
			id: '1',
			image: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
			description: 'test',
			runtimeStr: '2h 2min',
			genres: ['action', 'comedy'],
			imDbRating: '7.5',
			imDbRatingVotes: '1,000',
			plot: 'test',
			stars: 'test',
			releaseDate: 'test',
			title: 'test'
		}
	]
}

describe('movies', () => {
	it('should render correctly', () => {
		expect.hasAssertions()

		render(<GenrePage data={mockData} />)

		expect(screen.getByText('drama')).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /sortby imdb rating/i })).toBeInTheDocument()
		expect(screen.getByText(/sortby/i)).toBeInTheDocument()
	})

	it('renders data correctly', () => {
		expect.hasAssertions()

		render(<GenrePage data={mockData} />)

		expect(screen.getByText(/test/i)).toBeInTheDocument()
		expect.hasAssertions()
	})
})
