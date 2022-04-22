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
      </div>
    </div>
  )
}
