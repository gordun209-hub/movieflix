import { render, screen } from '@testing-library/react'

import { MovieInfo } from '@/components/MoviePage/index'

test('should render MovieInfo', () => {
	render(
		<MovieInfo
			directorList={[{ id: '1', name: 'Jhony dep' }]}
			writerList={[{ id: '1', name: 'Writer Writer2' }]}
			starList={[{ id: '1', name: 'Star' }]}
			awards={'Awards'}
			countries={'Countries'}
			companies={'Companies'}
			languages={'Languages'}
		/>
	)
	expect(screen.getByText('Jhony dep')).toBeInTheDocument()
	expect(screen.getByText(/Writer /i)).toBeInTheDocument()
})
