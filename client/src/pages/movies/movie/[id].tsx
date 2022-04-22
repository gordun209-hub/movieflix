import { useRouter } from 'next/router'

import { Header, ImageWithPlot } from '../../../components/MoviePage/index'
import { Spinner } from '../../../components/Spinner'
import { useSearchMovieByIdQuery } from '../../../services/moviesApi'
import type { Movie } from '../../../types/movieType'

export const Movies = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error, isLoading } = useSearchMovieByIdQuery(id as string)

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
            />
          }
        </>
      )}
    </>
  )

  type MovieWriterStarDirectorProps = {
    directorList: [{ id: string; name: string }]
    writerList: [{ id: string; name: string }]
    starList: [{ id: string; name: string }]
    awards: string
  }
  function MovieWriterStarDirector({
    directorList,
    writerList,
    starList,
    awards
  }: MovieWriterStarDirectorProps) {
    return (
      <div className='flex-row gap-4 pl-2'>
        <div>
          <span>Directors: </span>
          {directorList.map(({ id, name }) => {
            return (
              <div
                key={id}
                className='prose inline-flex items-center px-2 text-center text-white'
              >
                <span> {name}</span>
              </div>
            )
          })}
        </div>
        <div>
          <span>Writers: </span>
          {writerList.map(({ id, name }) => (
            <div
              key={id}
              className='prose inline-flex items-center px-2 text-center text-white'
            >
              <span> {name}</span>
            </div>
          ))}
        </div>
        <div>
          <span>Stars: </span>
          {starList.map(({ id, name }) => (
            <div
              key={id}
              className='prose inline-flex items-center px-2 text-center text-white'
            >
              <span> {name}</span>
            </div>
          ))}
        </div>
        <div>
          <span>Awards: </span> <span className='text-white'>{awards}</span>
        </div>
      </div>
    )
  }
}

export default Movies
