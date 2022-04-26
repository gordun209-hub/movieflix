import { Button } from '@mui/material'
import Link from 'next/link'

export default function GenreNav() {
  const genres = ['action', 'family', 'comedy', 'horror', 'animation', 'drama']

  return (
    <div>
      <div>
        <div className='flex justify-center gap-4 bg-slate-400 p-2 '>
          {genres.map(genre => (
            <Link key={`/movies/${genre}`} passHref href={`/movies/${genre}`}>
              <Button
                key={genre}
                className='mx-6 flex h-12 flex-grow cursor-pointer justify-center bg-sky-800 text-slate-300  hover:bg-sky-700'
              >
                <p className=' pt-2 text-center'>{genre}</p>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
