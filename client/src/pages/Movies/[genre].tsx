import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useAppSelector } from '../../app/hooks'

import GenreCard from '../../components/movies/Card/GenreCard'
import SelectItem from '../../components/movies/SelectItem/SelectItem'
import { selectSortBy } from '../../features/FilterContentBy/FilterContentBy'

type Tres = {
  data: {
    results: {
      id: string
      image: string
      description: string
      runtimeStr: string
      genres: string[]
      imDbRating: string
      plot: string
      stars: string
      imDbRatingVotes: string
      releaseDate: string
      title: string
    }[]
  }
}
const GenrePage: NextPage<Tres> = ({ data }: Tres) => {
  const sortBy = useAppSelector(selectSortBy)
  const sortedMovies = data.results.sort((a, b) => {
    if (sortBy === 'imdb-rating') {
      return parseFloat(b.imDbRating) - parseFloat(a.imDbRating)
    } else if (sortBy === 'number-of-votes') {
      return parseFloat(b.imDbRatingVotes) - parseFloat(a.imDbRatingVotes)
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title)
    } else {
      return 0
    }
  })
  return (
    <>
      <SelectItem />
      <div className='flex flex-wrap justify-center gap-4 pt-10'>
        {sortedMovies?.map(movie => (
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
  const res = await fetch(
    `https://imdb-api.com/en/API/AdvancedSearch/k_hd2hitvi/?genres=${params?.genre}`
  )
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
