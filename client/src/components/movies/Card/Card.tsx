import Image from 'next/image'
import Link from 'next/link'

// title: "Inception"
type Movie = {
  movie: {
    id: string
    resultType: string
    image: string
    title: string
    description: string
  }
}
const Card = ({ movie }: Movie) => {
  return (
<<<<<<< HEAD
    <Link passHref href={`/movies/movie/${movie.id}`}>
      <div className=' w-64 bg-slate-500 pt-2'>
        <div>
          <Image src={movie.image} width={200} height={300} />
        </div>
        <div>
          <h1 className=' '>{movie.title} </h1>
        </div>
=======
    <div className='w-64 bg-slate-500 pt-2'>
      <div>
        <Image src={movie.image} width={200} height={300} />
      </div>
      <div>
        <h1 className=''>{movie.title} </h1>
>>>>>>> master
      </div>
    </Link>
  )
}
export default Card
