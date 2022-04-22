import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { Spinner } from '../../../components/Spinner'
import { searchMovieByIdQuery } from '../../../services/searchMovies'
import type { Movie } from '../../../types/movieType'
import { Header } from './Header'
import { ImageWithPlot } from './ImageWithPlotProps'

export const Movies = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error, isLoading } = useQuery<Movie>(
    ['singleMovieInfo'],
    () => searchMovieByIdQuery(id as string),
    {
      refetchOnMount: false,
      refetchInterval: 1000000000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false
    }
  )

  {
    isLoading && <Spinner />
  }
  {
    error && (error as Error).message
  }
  return (
    <>
      {data && (
        <>
          {
            <Header
              title={data?.title}
              imDbRating={data?.imDbRating}
              imdbRatingVotes={data?.imdbRatingVotes}
              metacriticRating={data?.metacriticRating}
              releaseDate={data?.releaseDate}
              contentRating={data?.contentRating}
              runtimeStr={data?.runtimeStr}
            />
          }
          {
            <ImageWithPlot
              genreList={data.genreList}
              image={data.image}
              plot={data.plot}
            />
          }
        </>
      )}
    </>
  )
}

export default Movies
