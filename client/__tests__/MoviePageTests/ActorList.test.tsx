import { render, screen } from '@testing-library/react'

import { ActorList } from '@/components/MoviePage'

test('should render ActorList', () => {
	const actorList = [
		{
			id: '1',
			name: 'name1',
			image: '/image1',
			asCharacter: 'asCharacter1'
		}
	]

	render(<ActorList actorList={actorList} />)

	expect(screen.getByText('name1')).toBeInTheDocument()
	expect(screen.getByText('asCharacter1')).toBeInTheDocument()
})
test('should render ActorList with no actorList', () => {
	const actorListt: {
		id: string
		name: string
		image: string
		asCharacter: string
	}[] = [
		{
			id: '1',
			name: '',
			image: '/image1',
			asCharacter: ''
		}
	]

	render(<ActorList actorList={actorListt} />)

	expect(screen.getByText('No character')).toBeInTheDocument()
	expect(screen.getByText('No name')).toBeInTheDocument()
})
