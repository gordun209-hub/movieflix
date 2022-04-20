import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import GenreCard from '../../components/movies/Card/GenreCard'
import { searchGenreQuery } from '../../services/searchMovies'

type Tres = {
  res: {
    results: {
      id: string
      image: string
      description: string
      runtimeStr: string
      genres: string[]
      imdbRating: string
      plot: string
      stars: string
    }[]
  }
}
const GenrePage: NextPage<Tres> = ({ res }) => {
  return (
    <>
      <div className='flex flex-wrap justify-center gap-4 pt-10'>
        {res.results.map(movie => (
          <div key={movie.id}>
            <GenreCard img={movie.image} />
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
  const res = await searchGenreQuery(params?.genre as string)
  console.log(res)
  return {
    props: {
      res
    }
  }
}
