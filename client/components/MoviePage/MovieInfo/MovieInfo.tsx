import type { MovieWriterStarDirectorProps } from '@/types/MovieWriterStarDirectorProps'

export default function MovieWriterStarDirector({
  directorList,
  writerList,
  starList,
  awards,
  countries,
  companies,
  languages
}: MovieWriterStarDirectorProps) {
  return (
    <div className='grid grid-cols-2 px-8'>
      <div className='col-span-1 flex-row gap-4'>
        <div>
          <span>Directors: </span>
          {directorList?.map(({ id, name }) => {
            return (
              <div
                key={id}
                className='prose inline-flex items-center px-2 text-center text-slate-800'
              >
                <span> {name}</span>
              </div>
            )
          })}
        </div>
        <div>
          <span>Writers: </span>
          {writerList.map(({ id, name }) => (
            <div
              key={id}
              className='prose inline-flex items-center px-2 text-center text-slate-800'
            >
              <span> {name}</span>
            </div>
          ))}
        </div>
        <div>
          <span>Stars: </span>
          {starList.map(({ id, name }) => (
            <div
              key={id}
              className='prose inline-flex items-center px-2 text-center text-slate-800'
            >
              <span> {name}</span>
            </div>
          ))}
        </div>
        {awards && (
          <div>
            <span>Awards: </span>{' '}
            <span className='text-slate-800'>{awards}</span>
          </div>
        )}
      </div>
      <div className='col-span-1 flex-row gap-4'>
        <span>Countries: </span>
        <span className='prose inline-flex items-center px-2 text-center text-slate-800'>
          {countries}
        </span>
        <div>
          <span>Companies:</span>
          <span className='prose inline-flex items-center px-2 text-center text-slate-800'>
            {companies}
          </span>
        </div>
        <div>
          <span>Languages:</span>
          <span className='prose inline-flex items-center px-2 text-center text-slate-800'>
            {languages}
          </span>
        </div>
      </div>
    </div>
  )
}
