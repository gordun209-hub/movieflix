import { GenreNav } from '@/components/GenreNav'
import { render, screen } from '@/utils/testUtils'

describe('GenreNav', () => {
	it('renders properly', () => {
		render(<GenreNav />)
		expect(screen.getByText(/action/i)).toBeInTheDocument()
		expect(screen.getByText(/family/i)).toBeInTheDocument()
		expect(screen.getByText(/comedy/i)).toBeInTheDocument()
		expect(screen.getByText(/horror/i)).toBeInTheDocument()
		expect(screen.getByText(/animation/i)).toBeInTheDocument()
		expect(screen.getByText(/drama/i)).toBeInTheDocument()
	})
	it('has links with correct urls', () => {
		render(<GenreNav />)
		expect(screen.queryAllByRole('link')).toHaveLength(6)
		expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '/movies/action')
		expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', '/movies/family')
		expect(screen.getAllByRole('link')[2]).toHaveAttribute('href', '/movies/comedy')
		expect(screen.getAllByRole('link')[3]).toHaveAttribute('href', '/movies/horror')
		expect(screen.getAllByRole('link')[4]).toHaveAttribute('href', '/movies/animation')
		expect(screen.getAllByRole('link')[5]).toHaveAttribute('href', '/movies/drama')
	})
})
