import { ImageList, ImageListItem } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as React from 'react'

import { useAppSelector } from '../../../app/hooks'
import { ActorList } from '../../../components/MoviePage/ActorList/ActorList'
import {
  BoxOffice,
  Header,
  ImageWithPlot,
  InfoButtons
} from '../../../components/MoviePage/index'
import MovieWriterStarDirector from '../../../components/MoviePage/MovieInfo/MovieInfo'
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
          {isShowPosters && <MovieInfo posters={data.posters} />}
        </>
      )}
    </>
  )
  type MovieInfoProps = {
    posters: {
      imdb: string
      title: string
      fullTitle: string
      year: string
      type: string
      errorMessage: string | null

      posters: {
        link: string
        id: string
      }[]
    }
  }
  function MovieInfo({ posters }: MovieInfoProps) {
    return (
      <ImageList
        sx={{
          width: '100%',
          height: '100%',
          padding: '0 1rem'
        }}
        cols={3}
      >
        {posters.posters.map(poster => (
          <ImageListItem key={poster.id}>
            <Image
              src={`${poster.link} `}
              width={1564}
              height={1564}
              alt={'laa'}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    )
  }
}

export default Movies
