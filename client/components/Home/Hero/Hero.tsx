import Image from 'next/image'

export default function Hero() {
	return (
		<section className='body-font bg-brand-light text-info-dark'>
			<div className='container mx-auto flex flex-col items-center px-5 py-24 md:flex-row'>
				<div className='mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24'>
					<h1 className='title-font mb-4 text-3xl font-medium text-gray-darkest sm:text-4xl'>
						Explore Movies and Celebrities
						<br className='hidden lg:inline-block' />
						on MovieFlix
					</h1>
					<p className='mb-8 leading-relaxed text-gray-darkest'>
						MovieFlix is a movie and celebrity discovery platform that connects you with the people and
						movies you love. Before going to cinema, you need to know the best movies and celebrities. This
						is the place to find out. MovieFlix is a place to find movies and celebrities.
					</p>
					<div className='flex justify-center'>
						<button
							type='button'
							className='inline-flex rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-info-light hover:bg-indigo-600 focus:outline-none'
						>
							Explore
						</button>
					</div>
				</div>
				<div className='w-5/6 text-info-light md:w-1/2 lg:w-full lg:max-w-lg'>
					<Image
						className='rounded object-cover object-center'
						alt='hero'
						width={720}
						height={600}
						src='/once.jpeg'
					/>
				</div>
			</div>
		</section>
	)
}
