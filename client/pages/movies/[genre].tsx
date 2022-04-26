import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import GenreCard from '@/components/movies/Card/MovieCardWithImage'
import SelectItem from '@/components/movies/SelectItem/SelectItem'
import type { SearchByGenreType } from '@/types/movieType'
import fetchProps from '@/utils/fetchProps'
import { sortedMovies } from '@/utils/sortMovies'

import { useAppSelector } from '../../app/hooks'
import { selectSortBy } from '../../features/FilterContentBy/FilterContentBy'

const GenrePage: NextPage<SearchByGenreType> = ({
  data
}: SearchByGenreType) => {
  const sortBy = useAppSelector(selectSortBy)
  const sortMovies = sortedMovies(data?.results, sortBy)
  return (
    <>
      <SelectItem />
      <div className='flex flex-wrap justify-center gap-4 pt-10'>
        {sortMovies?.map(movie => (
          <div key={movie.id}>
            <GenreCard img={movie.image} id={movie.id} />
          </div>
        ))}
      </div>
    </>
  )
}

export default GenrePage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { genre: 'action' } },
      { params: { genre: 'family' } },
      { params: { genre: 'comedy' } },
      { params: { genre: 'horror' } },
      { params: { genre: 'animation' } },
      { params: { genre: 'drama' } }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const data = await fetchProps(params)
    return {
      props: {
        data
      }
    }
  }
  return {
    props: {
      data: null
    }
  }
}
