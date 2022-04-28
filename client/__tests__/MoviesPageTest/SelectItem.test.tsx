import userEvent from '@testing-library/user-event'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { SelectItem } from '@/components/Movies'
import { render, screen } from '@/utils/testUtils'

const mockDispatch = jest.fn()
jest.mock('@/app/hooks', () => ({
	useAppSelector: jest.fn(),
	useAppDispatch: () => mockDispatch
}))
describe('SelectItem component renders properly with given props', () => {
	afterEach(() => {
		mockDispatch.mockClear()
	})
	it('can select from options', async () => {
		render(<SelectItem />)

		const options = screen.getByRole('button', { name: /sortBy/i })
		await userEvent.click(options).then(async () => {
			const title = screen.getByRole('option', { name: /title/i })
			await userEvent.click(title)
			expect(title).toBeInTheDocument()
			expect(mockDispatch).toHaveBeenCalledTimes(1)
			expect(mockDispatch).toHaveBeenCalledWith({
				type: 'sortBy/setSortBy',
				payload: 'title'
			})
		})
	})
	it('can select from option and dispatches proper action', async () => {
		render(<SelectItem />)
		const options = screen.getByRole('button', { name: /sortBy/i })
		await userEvent.click(options).then(async () => {
			const imdbRating = screen.getByRole('option', { name: /imdb rating/i })
			await userEvent.click(imdbRating)
			await userEvent.click(screen.getByRole('button', { name: /SortBy imdb rating/i }))
			await userEvent.click(screen.getByRole('option', { name: /number of votes/i }))
			expect(imdbRating).toBeInTheDocument()
			expect(mockDispatch).toHaveBeenCalledTimes(1)
			expect(mockDispatch).toHaveBeenCalledWith({
				type: 'sortBy/setSortBy',
				payload: 'number-of-votes'
			})
		})
	})
})
