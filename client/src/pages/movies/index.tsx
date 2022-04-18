import { useState } from 'react'
import { useQuery } from 'react-query'

import { Card, SearchMovie } from '../../components/movies'
import { Spinner } from '../../components/Spinner'
import { searchMovieQuery } from '../../services/searchMovies'

const Movies = () => {
  const [searchParams, setSearchParams] = useState()
  const { data, isLoading, refetch, isFetching } = useQuery(
    ['movies'],
    () => searchMovieQuery(searchParams),
    {
      enabled: false,
      refetchOnWindowFocus: false
    }
  )
  return (
    <div className='bg-slate-600'>
      <h1 className='pt-2 text-center text-3xl text-slate-200'>Movies</h1>
      <SearchMovie
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        refetch={refetch}
      />
      {isLoading && isFetching && <Spinner />}
      {data && (
        <div className='flex flex-wrap justify-evenly gap-6 bg-slate-600    text-center'>
          {data?.results.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Movies
