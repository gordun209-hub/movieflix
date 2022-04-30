import { render, screen } from '@testing-library/react'

import { BoxOffice } from '@/components/MoviePage'
import { TBoxOffice } from '@/types/BoxOffice'

test('should render BoxOffice', () => {
	const props: TBoxOffice = {
		budget: '1',
		openingWeekendUSA: '2',
		grossUSA: '3',
		cumulativeWorldWideGross: '4'
	}
	render(<BoxOffice {...props} />)
	expect(screen.getByText(/1/)).toBeInTheDocument()
	expect(screen.getByText(/2/)).toBeInTheDocument()
	expect(screen.getByText(/3/)).toBeInTheDocument()
	expect(screen.getByText(/4/)).toBeInTheDocument()
})
