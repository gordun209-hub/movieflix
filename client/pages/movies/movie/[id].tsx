import { useRouter } from 'next/router'
import * as React from 'react'

import { useAppSelector } from '../../../app/hooks'
import {
  ActorList,
  BoxOffice,
  Header,
  ImageWithPlot,
  InfoButtons,
  MovieInfo,
  MoviePosters
} from '../../../components/MoviePage/index'
import { Spinner } from '../../../components/Spinner'
import {
  selectShowActors,
  selectShowBoxOffice,
  selectShowPosters
} from '../../../features/ContentToShow/contentToShowSlice'
import { useSearchMovieByIdQuery } from '../../../services/moviesApi'

export const Movies = () => {
  const isShowPosters = useAppSelector(selectShowPosters)
  const isShowActors = useAppSelector(selectShowActors)
  const isShowBoxOffice = useAppSelector(selectShowBoxOffice)
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
            <MovieInfo
              directorList={data?.directorList}
              writerList={data.writerList}
              starList={data.starList}
              awards={data.awards}
              companies={data.companies}
              countries={data.countries}
              languages={data.languages}
            />
          }

          <InfoButtons />

          {isShowBoxOffice && (
            <BoxOffice
              budget={data.boxOffice.budget}
              cumulativeWorldWideGross={data.boxOffice.cumulativeWorldwideGross}
              grossUSA={data.boxOffice.grossUSA}
              openingWeekendUSA={data.boxOffice.openingWeekendUSA}
            />
          )}
          {isShowActors && <ActorList actorList={data.actorList} />}
          {isShowPosters && <MoviePosters posters={data.posters} />}
        </>
      )}
    </>
  )
}

export default Movies
