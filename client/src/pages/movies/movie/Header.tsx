import Image from 'next/image'

type Props = {
  title: string
  imDbRating: string
  imdbRatingVotes: string
  metacriticRating: string
  releaseDate: string
  contentRating: string
  runtimeStr: string
}
export function Header({
  title,
  imDbRating,
  imdbRatingVotes,
  metacriticRating,
  releaseDate,
  contentRating,
  runtimeStr
}: Props) {
  return (
    <div className='grid-col-2 grid grid-flow-col justify-evenly font-serif'>
      <div>
        <p className='pt-8 text-4xl text-white'>{title}</p>
        <p className='pt-2 text-slate-400'>
          {releaseDate.substring(0, 4)} {contentRating} {runtimeStr}
        </p>
      </div>
      <div>
        <div className='flex justify-center gap-4 pt-8 text-slate-200'>
          <div>
            <p className='mb-1'>Imdb rating </p>
            <div className='flex items-center gap-2'>
              <div>
                <Image width={25} height={35} src={'/star.png'} />
              </div>
              <div>
                <p className='mr-1 inline text-lg text-white'>{imDbRating}</p>
                <span>/10</span>
                <p>{imdbRatingVotes}</p>
              </div>
            </div>
          </div>
          <div>
            <p>Your rating</p>
            <div className='flex items-center justify-center gap-2 pt-2 text-sky-600'>
              <Image
                width={30}
                color={'blue'}
                height={30}
                src={'/star-shape.png'}
              />{' '}
              <span>Rate</span>
            </div>
          </div>
          <div className='text-center'>
            <p>Metacritics Rating</p>
            <p className='text-2xl font-bold'>{metacriticRating}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
