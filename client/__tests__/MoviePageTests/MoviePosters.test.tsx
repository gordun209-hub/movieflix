import { render, screen } from '@testing-library/react'

import { MoviePosters } from '@/components/MoviePage'
import { MovieInfoProps } from '@/types/movieType'

test('should render MoviePosters', () => {
  const props: MovieInfoProps = {
    posters: {
      posters: [
        {
          id: '1',
          link: '/https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
        },
        {
          id: '2',
          link: '/https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
        }
      ],
      imdb: 'laa',
      title: 'title',
      fullTitle: 'fullTitle',
      year: 'year',
      type: 'type',
      errorMessage: 'errorMessage'
    }
  }
  render(<MoviePosters posters={props.posters} />)
  expect(screen.getAllByRole('img')).toHaveLength(2)
})
