export type Movie = {
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
  imDbRating: string
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
  trailer: [
    {
      imDbId: string
      title: string
      fullTitle: string
      type: string
      year: string
      videoId: string
      videoTitle: string
      videoDescription: string
      thumbnailUrl: string
      uploadDate: null
      link: string
      linkEmbed: string
      errorMessage: ''
    }
  ]
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

export type movieSearch = {
  searchType: string
  expression: string
  results: [
    {
      id: string
      resultType: string
      image: string
      title: string
      description: string
    }
  ]
}
