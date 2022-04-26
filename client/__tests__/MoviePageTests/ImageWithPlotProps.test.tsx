import { render, screen } from '@testing-library/react'

import { ImageWithPlot } from '@/components/MoviePage/index'

test('should render ImageWithPlot', () => {
  const genreList: [{ key: string; value: string }] = [
    {
      key: '1',
      value: 'value1'
    }
  ]
  render(<ImageWithPlot image={'image'} plot={'plot'} genreList={genreList} />)
  expect(screen.getByText('plot')).toBeInTheDocument()
})

test('should render ImageWithPlot with no value or pilot', () => {
  const genreList: [{ key: string; value: string }] = [{ key: '', value: '' }]
  render(<ImageWithPlot image={'image'} plot={''} genreList={genreList} />)
  expect(screen.queryByText('plot')).not.toBeInTheDocument()
})
