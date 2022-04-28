import Movies from '@/pages/movies/index'
import { render, screen } from '@/utils/testUtils'

import { mockData } from '../../utils/mockDatas'

describe('Movies', () => {
	it('should render correctly', () => {
		render(<Movies data={mockData} />)
		expect(screen.getByText('drama')).toBeInTheDocument()
		expect(screen.getByText('Star Wars: Episode IV - A New Hope')).toBeInTheDocument()
		expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument()
		expect(screen.getAllByRole('img')).toHaveLength(2)
	})
})
