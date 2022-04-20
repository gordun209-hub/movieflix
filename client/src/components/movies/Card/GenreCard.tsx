import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type props = {
  img: string
  id: string
}

const GenreCard: FC<props> = ({ img, id }) => {
  return (
    <div>
      <Link passHref href={`/movies/movie/${id}`}>
        <div>
          <Image src={img} width={300} height={300} />
        </div>
      </Link>
    </div>
  )
}

export default GenreCard
