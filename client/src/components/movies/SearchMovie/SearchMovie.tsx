const SearchMovie = ({ searchParams, setSearchParams, refetch }) => {
  return (
    <div>
      <div>
        <div className='flex  justify-center'>
          <div className='mb-3 xl:w-96'>
            <div className='input-group relative mb-4  flex w-full   items-stretch'>
              <input
                type='search'
                value={searchParams}
                className='inpt-main input-group'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='button-addon3'
                onChange={e => setSearchParams(e.target.value)}
              />
              <button
                className='form-btn'
                type='button'
                id='button-addon3'
                onClick={() => {
                  refetch()
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
