import { useState } from 'react'

import { Card, SearchMovie } from '../../components/movies'
import { Spinner } from '../../components/Spinner'
import { useSearchQuery } from '../../services/moviesApi'

const Movies = () => {
  const [searchParams, setSearchParams] = useState()
  const { data: movies, isFetching } = useSearchQuery(searchParams, {
    skip: !searchParams
  })

  if (isFetching) {
    return <Spinner />
  }
  return (
    <div className='bg-slate-600'>
      <h1 className='pt-2 text-center text-3xl text-slate-200'>Movies</h1>
      <SearchMovie setSearchParams={setSearchParams} />
      {movies && (
        <div className='flex flex-wrap justify-evenly gap-6 bg-slate-600 text-center'>
          {movies.results.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Movies
