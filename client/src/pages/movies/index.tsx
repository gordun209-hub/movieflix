import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FC } from 'react'

import { Card } from '../../components/movies'

type movie = {
  data: {
    items: {
      id: string
      title: string
      image: string
      description: string
      resultType: string
    }[]
  }
}
const genres = ['action', 'family', 'comedy', 'horror', 'animation', 'drama']
const Movies: FC<movie> = ({ data }) => {
  return (
    <div className='grid  gap-4 bg-slate-600'>
      <div className=''>
        <h1 className='pt-2 text-center text-3xl text-slate-200'>Movies</h1>
        <div>
          <div className='flex justify-center gap-4'>
            {genres.map(genre => (
              <Link key={`/movies/${genre}`} passHref href={`/movies/${genre}`}>
                <div
                  key={genre}
                  className='mx-6 flex h-12 flex-grow cursor-pointer justify-center bg-slate-900 text-slate-300'
                >
                  <p className='pt-2 text-center'>{genre}</p>
                </div>
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
    'https://imdb-api.com/en/API/MostPopularMovies/k_hd2hitvi'
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
