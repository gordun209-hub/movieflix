<<<<<<< HEAD
/* eslint-disable @next/next/no-img-element */
=======
>>>>>>> master
type ImageWithPlotProps = {
  genreList: [{ key: string; value: string }]
  image: string
  plot: string
}
export default function ImageWithPlot({
  genreList,
  image,
  plot
}: ImageWithPlotProps) {
  return (
<<<<<<< HEAD
    <div className='m-8 grid grid-cols-2 items-center justify-center gap-2 border-4 border-orange-300 p-24'>
      <div className=''>
        <span>
          {genreList.map(({ key, value }) => {
            return (
              <span
                key={key}
                className='w-18 prose inline h-16 items-center rounded-full border-2 border-black px-2 text-center text-slate-800'
              >
                {value}
              </span>
            )
          })}
        </span>
        <div className='h-1/2 w-4/5'>
          <img className='w-full' src={image} />
        </div>
      </div>
      <div className='prose-xl place-self-center text-center'>
        <p className='text-slate-800 md:text-lg lg:text-3xl'>{plot}</p>
=======
    <div className='grid grid-cols-2 gap-4 pt-12'>
      <div className='col-span-1 min-h-full w-fit justify-end'>
        <div>
          {genreList.map(({ key, value }) => {
            return (
              <div
                key={key}
                className='prose m-2 inline-flex h-14 items-center rounded-full border-2 border-black px-2 text-center'
              >
                {value}
              </div>
            )
          })}
        </div>
        <img src={image} />
      </div>
      <div className='col-span-1 self-center lg:prose-xl'>
        <p className='px-4 pt-8 text-white'>{plot}</p>
>>>>>>> master
      </div>
    </div>
  )
}
