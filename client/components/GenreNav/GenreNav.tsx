// import { Button } from '@mui/material'
import { Button, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

const GenreNav = () => {
	const genres = ['action', 'family', 'comedy', 'horror', 'animation', 'drama']

	return (
		<Stack direction='row' align='center' p={4}>
			{genres.map(genre => (
				<Link key={`/movies/${genre}`} passHref href={`/movies/${genre}`}>
					<Button
						key={genre}
						textAlign={'justify'}
						textStyle={{ fontSize: '1.2rem' }}
						variant={'link'}
						data-cy={genre}
						className='flex h-12 flex-grow cursor-pointer justify-center bg-sky-800 uppercase text-slate-300  hover:bg-sky-700'
					>
						<Text className=' pt-2 text-center'>{genre}</Text>
					</Button>
				</Link>
			))}
		</Stack>
	)
}
export default GenreNav
