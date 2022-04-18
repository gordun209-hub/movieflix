// {
type Tsearch = {
  searchType: string
  expression: string
  results: {
    id: string
    resultType: string
    description: string
    image: string
    title: string
  }[]
}
// for searching
//     "searchType": "Title",
//     "expression": "inception 2010",
// https://imdb-api.com/en/API/Search/k_t0zj84io/inception%202010
export const searchResult: Tsearch = {
  searchType: 'Title',
  expression: 'inception 2010',

  results: [
    {
      id: 'tt1375666',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg',
      title: 'Inception',
      description: '(2010)'
    },
    {
      id: 'tt1790736',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_Ratio0.6800_AL_.jpg',
      title: 'Inception: Motion Comics',
      description: '(2010 Video)'
    },
    {
      id: 'tt5295990',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_Ratio0.6800_AL_.jpg',
      title: 'Inception: Jump Right Into the Action',
      description: '(2010 Video)'
    }
  ]
}

export type TsearchTitleResults = {
  searchType: string
  expression: string
  results: {
    id: string
    resultType: string
    image: string
    title: string
    description: string
  }[]
}
// Search title
// https://imdb-api.com/en/API/SearchTitle/k_t0zj84io/inception%202010
export const searchTitleResults: TsearchTitleResults = {
  searchType: 'title',
  expression: 'inception 2010',
  results: [
    {
      id: 'tt1375666',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg',
      title: 'Inception',
      description: '(2010)'
    },
    {
      id: 'tt1790736',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_Ratio0.6800_AL_.jpg',
      title: 'Inception: Motion Comics',
      description: '(2010 Video)'
    },
    {
      id: 'tt5295990',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_Ratio0.6800_AL_.jpg',
      title: 'Inception: Jump Right Into the Action',
      description: '(2010 Video)'
    },
    {
      id: 'tt1686778',
      resultType: 'Title',
      image: 'https://imdb-api.com/images/original/nopicture.jpg',
      title: 'Inception: 4Movie Premiere Special',
      description: '(2010 TV Movie)'
    }
  ]
}

// https://imdb-api.com/en/API/SearchMovie/k_t0zj84io/inception 2010
// search movie
export type TsearchMovie = {
  searchType: string
  expression: string
  results: {
    id: string
    resultType: string
    image: string
    title: string
    description: string
  }[]
  errorMessage: string
}

export const searchMovie: TsearchMovie = {
  searchType: 'Movie',
  expression: 'inception 2010',
  results: [
    {
      id: 'tt1375666',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg',
      title: 'Inception',
      description: '(2010)'
    },
    {
      id: 'tt1790736',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_Ratio0.6800_AL_.jpg',
      title: 'Inception: Motion Comics',
      description: '(2010 Video)'
    },
    {
      id: 'tt5295990',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_Ratio0.6800_AL_.jpg',
      title: 'Inception: Jump Right Into the Action',
      description: '(2010 Video)'
    }
  ],
  errorMessage: ''
}

//  https://imdb-api.com/en/API/SearchSeries/k_t0zj84io/lost
export type SearchSeriesResults = {
  searchType: string
  expression: string
  results: {
    id: string
    resultType: string
    image: string
    title: string
    description: string
  }[]
  errorMessage: string
}
export const SearchSeriesResults: SearchSeriesResults = {
  searchType: 'Series',
  expression: 'lost',
  results: [
    {
      id: 'tt0411008',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7273_AL_.jpg',
      title: 'Lost',
      description: '(2004) (TV Series)'
    },
    {
      id: 'tt14609588',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BMmU5ZTRmZmEtYjA1Ny00NzRlLWIyODItZWQ4NDlkYzFmNDYyXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_Ratio0.7273_AL_.jpg',
      title: 'Lost',
      description: '(2021) (TV Series)'
    },
    {
      id: 'tt5232792',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BYzZkOTY4MDgtODI5Mi00ZjA4LWJkODgtYzBiOGE3MWNhZWFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7273_AL_.jpg',
      title: 'Lost in Space',
      description: '(2018) (TV Series)'
    },
    {
      id: 'tt11379026',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BMzRlOTdiNGEtOTlmZi00YjNiLTljZjItZGNhNjY5ZDM4Yzg2XkEyXkFqcGdeQXVyNjc0MjkzNjc@._V1_Ratio0.7273_AL_.jpg',
      title: 'Ghosts',
      description: '(2021) (TV Series)'
    }
  ],
  errorMessage: ''
}

// https://imdb-api.com/en/API/SearchName/k_t0zj84io/Jean%20Reno
export type SearchNameResults = {
  searchType: string
  expression: string
  results: {
    id: string

    resultType: string
    image: string
    title: string
    description: string
  }[]
  errorMessage: string
}
export const SearchNameResults = {
  searchType: 'Name',
  expression: 'Jean Reno',
  results: [
    {
      id: 'nm0000606',
      resultType: 'Name',
      image:
        'https://imdb-api.com/images/original/MV5BMTgzNjA1MjY2M15BMl5BanBnXkFtZTYwMjgzOTk0._V1_Ratio0.7273_AL_.jpg',
      title: 'Jean Reno',
      description: '(I) (Actor, Léon: The Professional (1994))'
    },
    {
      id: 'nm13409000',
      resultType: 'Name',
      image: 'https://imdb-api.com/images/original/nopicture.jpg',
      title: 'Jean Reno',
      description: "(III) (Actor, L'immortale (2011))"
    },
    {
      id: 'nm0719733',
      resultType: 'Name',
      image: 'https://imdb-api.com/images/original/nopicture.jpg',
      title: 'Jean Reno',
      description: '(II) (Actress, The Hunted Men (1930))'
    },
    {
      id: 'nm0719756',
      resultType: 'Name',
      image:
        'https://imdb-api.com/images/original/MV5BMjA0NjI0MTIwNF5BMl5BanBnXkFtZTYwNTY0MjI2._V1_Ratio1.4545_AL_.jpg',
      title: 'Jean Renoir',
      description: '(Writer, The Rules of the Game (1939))'
    }
  ],
  errorMessage: ''
}

// https://imdb-api.com/en/API/SearchEpisode/k_t0zj84io/London

export const searchEpisodeResults = {
  searchType: 'Episode',
  expression: 'London',
  results: [
    {
      id: 'tt0923499',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BYmJlZTYxMTgtNmJjNi00ZTQwLWI2ODItOGUyNTY0YjhiYTYzXkEyXkFqcGdeQXVyMTAxMjIzNTQ5._V1_Ratio1.2273_AL_.jpg',
      title: 'London',
      description:
        '(1983) (TV Episode) - Season 1 | Episode 7 - Treasure Hunt (1982) (TV Series)'
    },
    {
      id: 'tt13267258',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BZmRlNzI5NWQtMTUwOS00ZWMwLWFkZTQtYTEyMTEwZTM4YjliXkEyXkFqcGdeQXVyNDc3NzQwMzc@._V1_Ratio0.7273_AL_.jpg',
      title: 'London',
      description:
        '(2020) (TV Episode) - Season 1 | Episode 3 - #Travel (2020) (TV Series)'
    },
    {
      id: 'tt12967650',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BYmM1OTg0YTktZTI5NC00MGExLTg0ZWQtYjcyNDgzNTU1YzI5XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_Ratio1.3182_AL_.jpg',
      title: 'London',
      description:
        '(2008) (TV Episode) - Le dessous des cartes (1990) (TV Series)'
    }
  ],
  errorMessage: ''
}

// https://imdb-api.com/en/API/SearchCompany/k_t0zj84io/warner%20bross

export const searchCompanyResults = {
  searchType: 'Company',
  expression: 'warner bross',
  results: [
    {
      id: 'co0040846',
      resultType: 'Company',
      image: '',
      title: 'Warner Bross Marte Films',
      description: ''
    },
    {
      id: 'co0002663',
      resultType: 'Company',
      image: '',
      title: 'Warner Bros.',
      description: '[us] (Distributor)'
    },
    {
      id: 'co0005035',
      resultType: 'Company',
      image: '',
      title: 'Warner Bros. Television',
      description: '[us] (Production)'
    },
    {
      id: 'co0870245',
      resultType: 'Company',
      image: '',
      title: 'Warner Bros.',
      description: '[gb] (Production)'
    },
    {
      id: 'co0080422',
      resultType: 'Company',
      image: '',
      title: 'Warner Bros. Entertainment',
      description: '[us] (Production)'
    }
  ],
  errorMessage: ''
}

//  https://imdb-api.com/en/API/SearchKeyword/k_t0zj84io/gun

export const searchKeywordResults = {
  searchType: 'Keyword',
  expression: 'gun',
  results: [
    {
      id: 'gun',
      resultType: 'Keyword',
      image: '',
      title: 'gun',
      description: '(11216 titles)'
    },
    {
      id: 'gunfight',
      resultType: 'Keyword',
      image: '',
      title: 'gunfight',
      description: '(3847 titles)'
    },
    {
      id: 'gunfire',
      resultType: 'Keyword',
      image: '',
      title: 'gunfire',
      description: '(2432 titles)'
    },
    {
      id: 'gunshot',
      resultType: 'Keyword',
      image: '',
      title: 'gunshot',
      description: '(2290 titles)'
    },
    {
      id: 'gunshot-wound',
      resultType: 'Keyword',
      image: '',
      title: 'gunshot-wound',
      description: '(1161 titles)'
    }
  ],
  errorMessage: ''
}

//  https://imdb-api.com/en/API/SearchAll/k_t0zj84io/inception

export const searchAllResults = {
  searchType: 'All',
  expression: 'inception',
  results: [
    {
      id: 'tt1375666',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.7273_AL_.jpg',
      title: 'Inception',
      description: '(2010)'
    },
    {
      id: 'tt7321322',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BYWJmYWJmNWMtZTBmNy00M2MzLTg5ZWEtOGU5ZWRiYTE0ZjVmXkEyXkFqcGdeQXVyNzkyOTM2MjE@._V1_Ratio0.7273_AL_.jpg',
      title: 'Inception',
      description: '(2014) (Short)'
    },
    {
      id: 'tt3022202',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BMTgyMTcyNDE1OF5BMl5BanBnXkFtZTgwODQ2Njk3MDE@._V1_Ratio0.7273_AL_.jpg',
      title: 'Inception',
      description:
        '(2010) (TV Episode) - Season 4 | Episode 53 - Zoom In (2008) (TV Series)'
    },
    {
      id: 'tt1790736',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_Ratio0.7273_AL_.jpg',
      title: 'Inception: Motion Comics',
      description: '(2010) (Video)'
    },
    {
      id: 'tt5295990',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_Ratio0.7273_AL_.jpg',
      title: 'Inception: Jump Right Into the Action',
      description: '(2010) (Video)'
    }
  ],
  errorMessage: ''
}
