import { useRouter } from 'next/router'

import { Movies } from '@/pages/movies/movie/[id]'
import { useSearchMovieByIdQuery } from '@/services/moviesApi'
import { render, screen, waitFor } from '@/utils/testUtils'

jest.mock('next/router', () => ({
	useRouter: jest.fn(() => ({
		query: {
			id: 'tt1375666'
		}
	}))
}))

describe('Movies', () => {
	it('should render correctly', async () => {
		render(<Movies />)
		await waitFor(() => {
			expect(screen.getByText('Inception')).toBeInTheDocument()
		})
	})
})
