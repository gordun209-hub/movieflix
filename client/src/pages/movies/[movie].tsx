import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import GenreCard from '../../components/movies/Card/GenreCard'

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
        {res?.results.map(movie => (
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
    `https://imdb-api.com/en/API/AdvancedSearch/k_t0zj84io/?genres=${params}`
  )
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
