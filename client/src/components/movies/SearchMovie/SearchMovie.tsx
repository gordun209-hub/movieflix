import { FC, useState } from 'react'

type Props = {
  setSearchParams: (searchParams: string) => void
}
const SearchMovie: FC<Props> = ({ setSearchParams }) => {
  const [searchString, setSearchString] = useState('')
  return (
    <div>
      <div>
        <div className='flex justify-center'>
          <div className='mb-3 xl:w-96'>
            <div className='input-group relative mb-4 flex w-full items-stretch'>
              <input
                type='search'
                value={searchString}
                className='inpt-main input-group'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='button-addon3'
                onChange={e => setSearchString(e.target.value)}
              />
              <button
                className='form-btn'
                type='button'
                id='button-addon3'
                onClick={() => {
                  setSearchParams(searchString)
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchMovie
