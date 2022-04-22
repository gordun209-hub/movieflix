import { useRouter } from 'next/router'

import { Header, ImageWithPlot } from '../../../components/MoviePage/index'
import MovieWriterStarDirector from '../../../components/MoviePage/MovieInfo/MovieInfo'
import { Spinner } from '../../../components/Spinner'
import { useSearchMovieByIdQuery } from '../../../services/moviesApi'

export const Movies = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error, isLoading } = useSearchMovieByIdQuery(id)

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
          {
            <MovieWriterStarDirector
              directorList={data.directorList}
              writerList={data.writerList}
              starList={data.starList}
              awards={data.awards}
              companies={data.companies}
              countries={data.countries}
              languages={data.languages}
            />
          }
        </>
      )}
    </>
  )
}

export default Movies
