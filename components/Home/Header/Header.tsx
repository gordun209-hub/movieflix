import { Button, Typography } from '@mui/material'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='body-font bg-brand text-gray-lighter'>
			<div className='container mx-auto flex flex-col flex-wrap items-center p-2 md:flex-row'>
				<div className='title-font text-gray-900 mb-4 flex items-center font-medium md:mb-0'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						className='h-10 w-10 rounded-full bg-indigo-500 p-2 text-white'
						viewBox='0 0 24 24'
					>
						<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
					</svg>

					<div className='ml-3 text-xl'>
						<Link passHref href='/'>
							<a>MovieFlix</a>
						</Link>
					</div>
				</div>
				<div className='md:border-gray-400 flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:border-l md:py-1 md:pl-4'>
					<Link passHref href={'/movies'}>
						<Button
							color='secondary'
							variant='contained'
							className='hover:text-gray-900 mr-5'
							data-cy={'movies'}
						>
							Movies
						</Button>
					</Link>{' '}
					<Link passHref href={'/tvSeries'} data-cy={'tvSeries'}>
						<Button
							color='secondary'
							variant='contained'
							className='hover:text-gray-900 mr-5'
							data-cy={'movies'}
						>
							tvSeries
						</Button>
					</Link>{' '}
					<Link passHref href={'/imdbTop'} data-cy={'imdbTop'}>
						<Button
							color='secondary'
							variant='contained'
							className='hover:text-gray-900 mr-5'
							data-cy={'movies'}
						>
							<Typography>Imdb Top250</Typography>
						</Button>
					</Link>
				</div>
				<div className='bg-gray-100 hover:bg-gray-200 mt-4 inline-flex items-center rounded border-0 py-1 px-3 text-base focus:outline-none md:mt-0'></div>
			</div>
		</header>
	)
}
export default Header
