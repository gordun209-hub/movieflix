import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import * as React from 'react'

import { CardProps } from '@/types/CardProps'

const Card: FC<CardProps> = ({ id, img, imDbRating, title }) => {
	return (
		<div className='flex  min-h-full max-w-[150px]' data-cy={id}>
			<Link passHref href={`/movies/movie/${id}`}>
				<div className='bg-slate-500 '>
					<div>
						<Image src={img} width={150} height={150} />
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
