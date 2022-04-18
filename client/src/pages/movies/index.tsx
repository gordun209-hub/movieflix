import { useState } from 'react'

import { Card, SearchMovie } from '../../components/movies'

const Movies = () => {
  const data = [
    {
      id: 'tt1375666',
      resultType: 'Title',
      image:
        'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg',
      title: 'Inception',
      description: '(2010)'
    }
  ]
  const [searchParams, setSearchParams] = useState()

  return (
    <div className='bg-slate-600'>
      <h1 className='pt-2 text-center text-3xl text-slate-200'>Movies</h1>
      <SearchMovie
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      {data && (
        <div className='flex flex-wrap justify-evenly gap-6 bg-slate-600    text-center'>
          {data?.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Movies
