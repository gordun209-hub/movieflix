type ImageWithPlotProps = {
  genreList: [{ key: string; value: string; }];
  image: string;
  plot: string;
};
export function ImageWithPlot({ genreList, image, plot }: ImageWithPlotProps) {
  return (
    <div className='grid grid-cols-2 gap-4 pt-12'>
      <div className='col-span-1 min-h-full w-fit justify-end'>
        <div>
          {genreList.map(({ key, value }) => {
            return (
              <div
                key={key}
                className='h-30 w-30 mx-2 mb-2 inline-flex rounded border-2 border-white p-1'
              >
                <p className='items-center text-center'>{value}</p>
              </div>
            );
          })}
        </div>
        <img src={image} />
      </div>
      <div className='col-span-1 self-center lg:prose-xl'>
        <p className='px-4 pt-8 text-white'>{plot}</p>
      </div>
    </div>
  );
}
