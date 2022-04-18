/* eslint-disable no-irregular-whitespace */
// Object { id: "tt1375666", resultType: "Title", image: "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg", }​​
// description: "(2010)"
// id: "tt1375666"
// image: "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg"
// resultType: "Title"

import Image from 'next/image'

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
    <div className=' w-64 bg-slate-500 pt-2'>
      <div>
        <Image src={movie.image} width={200} height={300} />
      </div>
      <div>
        <h1 className=' '>{movie.title} </h1>
      </div>
    </div>
  )
}
export default Card
