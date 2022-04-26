import { Button } from '@mui/material'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FC } from 'react'

import { Card, SelectItem } from '../../components/movies'
import type { PopularMovies } from '../../types/movieType'

const Movies: FC<PopularMovies> = ({ data }) => {
  const genres = ['action', 'family', 'comedy', 'horror', 'animation', 'drama']

  return (
    <div className='grid  grid-flow-row gap-4 bg-slate-600'>
      <div className=''>
        <SelectItem />
        <div>
          <div className='flex justify-center gap-4 pt-12 '>
            {genres.map(genre => (
              <Link key={`/movies/${genre}`} passHref href={`/movies/${genre}`}>
                <Button
                  key={genre}
                  className='mx-6 flex h-12 flex-grow cursor-pointer justify-center bg-sky-800 text-slate-300  hover:bg-sky-700'
                >
                  <p className=' pt-2 text-center'>{genre}</p>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {data && (
        <div className='flex flex-wrap justify-evenly gap-6 bg-slate-600 text-center'>
          {data?.items.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const popularMovies = await fetch(
    'https://imdb-api.com/en/API/MostPopularMovies/k_t0zj84io'
  )
  const data = await popularMovies.json()
  return {
    props: {
      data
    },
    revalidate: 1
  }
}
export default Movies
