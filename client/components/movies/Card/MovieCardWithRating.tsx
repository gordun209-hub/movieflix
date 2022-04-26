import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { CardProps } from '@/types/CardProps'

const Card: FC<CardProps> = ({ id, img, imDbRating, title }) => {
  return (
    <div className='flex min-h-full max-w-[200px]'>
      <Link passHref href={`/movies/movie/${id}`}>
        <div className='bg-slate-500 '>
          <div>
            <Image src={img} width={200} height={300} />
          </div>
          <div>
            <h1>{title} </h1>
            <p> Imdb : {imDbRating}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default Card
