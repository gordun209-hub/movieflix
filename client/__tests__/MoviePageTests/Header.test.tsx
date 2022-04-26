import { render, screen } from '@testing-library/react'

import Header from '@/components/MoviePage/Header/Header'

test('should render Header properyl', () => {
  render(
    <Header
      title={'title'}
      imDbRating={'10'}
      imdbRatingVotes={'imdbRatingVotes'}
      metacriticRating={'metacriticRating'}
      releaseDate={'104 min'}
      contentRating={'contentRating'}
      runtimeStr={'104 min'}
    />
  )
  expect(screen.getByText('title')).toBeInTheDocument()
  expect(screen.getByText(/104/i)).toBeInTheDocument()
  expect(screen.getByText(/contentRating/i)).toBeInTheDocument()
  expect(screen.getByText(/104 min/i)).toBeInTheDocument()
  expect(screen.getByText('10')).toBeInTheDocument()
  expect(screen.getByText('imdbRatingVotes')).toBeInTheDocument()
  expect(screen.getByText('metacriticRating')).toBeInTheDocument()
})

test('should render Header with no metacriticRating', () => {
  render(
    <Header
      title={'title'}
      imDbRating={'10'}
      imdbRatingVotes={'imdbRatingVotes'}
      metacriticRating={''}
      releaseDate={'104 min'}
      contentRating={'contentRating'}
      runtimeStr={'104 min'}
    />
  )
  expect(screen.getByText('title')).toBeInTheDocument()
  expect(screen.getByText(/104/i)).toBeInTheDocument()
  expect(screen.getByText(/contentRating/i)).toBeInTheDocument()
  expect(screen.getByText(/104 min/i)).toBeInTheDocument()
  expect(screen.getByText('10')).toBeInTheDocument()
  expect(screen.getByText('imdbRatingVotes')).toBeInTheDocument()
  expect(screen.queryByText('metacriticRating')).not.toBeInTheDocument()
})
