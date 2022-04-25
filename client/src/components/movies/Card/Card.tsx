import Image from 'next/image'
import Link from 'next/link'

type Movie = {
  movie: {
    id: string
    resultType: string
    image: string
    title: string
    description: string
    imDbRating: string
  }
}
const Card = ({ movie }: Movie) => {
  return (
    <Link passHref href={`/Movies/movie/${movie.id}`}>
      <div className=' w-64 bg-slate-500 pt-2'>
        <div>
          <Image src={movie.image} width={200} height={300} />
        </div>
        <div>
          <h1 className=' '>{movie.title} </h1>
          <p> Imdb : {movie.imDbRating}</p>
        </div>
      </div>
    </Link>
  )
}
export default Card
