import { render, screen } from '@testing-library/react'

import { Card } from '@/components/Movies'
import type { CardProps } from '@/types/CardProps'

describe('Card component renders properly with given props', () => {
	it('renders properly', () => {
		const props: CardProps = {
			id: '1',
			img: 'https://via.placeholder.com/150',
			imDbRating: '8.5',
			title: 'Movie title'
		}
		render(<Card id={props.id} img={props.img} imDbRating={props.imDbRating} title={props.title} />)
		expect(screen.getByText(props.title)).toBeInTheDocument()
		expect(screen.getByText(`Imdb : ${props.imDbRating}`)).toBeInTheDocument()
		const image = screen.getByRole('img')
		expect(image).toHaveAttribute(
			'src',
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
		)
	})
})
