import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { Spinner } from '../../../components/Spinner'
import { searchMovieByIdQuery } from '../../../services/searchMovies'

type Movie = {
  id: string
  title: string
  originalTitle: string
  fullTitle: string
  type: string
  year: string
  image: string
  releaseDate: string
  runTimeMins: string
  runtimeStr: string

  awards: string
  boxOffice: {
    budget: string
    cumulativeWorldwideGross: string
    gorssUSA: string
    openingWeekendUSA: string
  }
  companies: string
  companyList: [
    {
      id: string
      name: string
    }
  ]
  contentRating: string
  countries: string
  countryList: [
    {
      key: string
      value: string
    }
  ]
  directorList: [
    {
      id: string
      name: string
    }
  ]
  directors: string
  errorMessage: string | null
  fullCast: string | null

  genreList: [{ key: string; value: string }]
  genres: string
  imdbRating: string
  imdbRatingVotes: string
  keywordList: string[]
  keywords: string
  languageList: [{ key: string; value: string }]
  language: string
  metacriticRating: string
  plot: string
  plotLocal: string
  posters: {
    imdb: string
    title: string
    fullTitle: string
    year: string
    type: string
    errorMessage: string | null
    backdrops: [
      {
        id: string
        link: string
        aspectRatio: number
        height: number

        width: number
      }
    ]
    posters: [
      {
        id: string
        aspectRatio: number
        height: number
        width: number
        language: string
        link: string
      }
    ]
  }
  ratings: string | null
  runtimeMins: string
  similars: [
    {
      id: string
      imDbRating: string
      image: string
      title: string
    }
  ]
  starList: [
    {
      id: string
      name: string
    }
  ]
  stars: string
  tagline: string
  trailer: string | null
  tvEpisodeInfo: null | string
  tvSeriesInfo: string | null
  writerList: [
    {
      id: string
      name: string
    }
  ]
  writers: string
  actorList: [
    {
      asCharacter: string
      id: string
      image: string
      name: string
    }
  ]
}
const Movie = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error, isLoading } = useQuery(['singleMovieInfo'], () =>
    searchMovieByIdQuery(id as string)
  )
  if (data) {
    console.log(data)
  }

  {
    isLoading && <Spinner />
  }
  {
    error && (error as Error).message
  }
  return <div>laa</div>
}

export default Movie
