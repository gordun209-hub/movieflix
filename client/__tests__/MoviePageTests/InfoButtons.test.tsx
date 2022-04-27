import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { InfoButtons } from '@/components/MoviePage/index'

import { store } from '../../app/store'

test('should render InfoButtons', () => {
	render(
		<Provider store={store}>
			<InfoButtons />
		</Provider>
	)
	expect(screen.getByText('See Actors')).toBeInTheDocument()
	expect(screen.getByText('See Box Office')).toBeInTheDocument()
	expect(screen.getByText('See Posters')).toBeInTheDocument()
})
