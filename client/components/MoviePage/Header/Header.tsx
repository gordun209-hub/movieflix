import Image from 'next/image'

import type { HeaderProps } from '@/types/headerProps'

export default function Header({ props }: HeaderProps) {
	const { contentRating, imDbRating, imdbRatingVotes, metacriticRating, releaseDate, runtimeStr, title } = props
	return (
		<div className='grid-col-2 grid grid-flow-col justify-between pr-12 font-serif'>
			<div className='pl-8'>
				<p className='pt-8 text-4xl text-slate-800'>{title}</p>
				<p className='pt-2 text-slate-800'>
					{releaseDate.substring(0, 4)} {contentRating} {runtimeStr}
				</p>
			</div>
			<div>
				<div className='flex justify-center gap-4 pt-8 text-slate-800'>
					<div>
						<p className='mb-1'>Imdb rating </p>
						<div className='flex items-center gap-2'>
							<div>
								<Image width={25} height={35} src={'/star.png'} />
							</div>
							<div>
								<p className='mr-1 inline text-lg text-slate-800'>{imDbRating}</p>
								<span>/10</span>
								<p>{imdbRatingVotes}</p>
							</div>
						</div>
					</div>
					<div>
						<p>Your rating</p>
						<div className='flex items-center justify-center gap-2 pt-2 text-slate-800'>
							<Image width={30} color={'blue'} height={30} src={'/star-shape.png'} /> <span>Rate</span>
						</div>
					</div>
					{metacriticRating && metacriticRating !== '' && (
						<div className='text-center'>
							<p>Metacritics Rating</p>
							<p className='text-2xl font-bold'>{metacriticRating}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
