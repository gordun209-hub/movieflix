import Link from 'next/link'

export default function Header() {
  return (
    <header className='body-font bg-brand text-gray-lighter  '>
      <div className='container mx-auto flex flex-col flex-wrap  items-center p-2 md:flex-row'>
        <a className='title-font text-gray-900 mb-4 flex items-center font-medium md:mb-0'>
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
          <span className='ml-3 text-xl'>MovieFlix</span>
        </a>
        <nav className='md:border-gray-400 flex flex-wrap items-center justify-center text-base	md:mr-auto md:ml-4 md:border-l md:py-1 md:pl-4'>
          <Link href={'/movies'}>
            <a className='hover:text-gray-900 mr-5'>Movies/Tv Series</a>
          </Link>{' '}
          <Link href={'/ranks'}>
            <a className='hover:text-gray-900 mr-5'>Rankings</a>
          </Link>{' '}
          <Link href={'/celebs'}>
            <a className='hover:text-gray-900 mr-5'>Celebs</a>
          </Link>
        </nav>
        <div className='bg-gray-100 hover:bg-gray-200 mt-4 inline-flex items-center rounded border-0 py-1 px-3 text-base focus:outline-none md:mt-0'>
          <Link href={'/login'}>
            <a className='  inline-flex flex-shrink-0 rounded border-0 bg-indigo-500 py-1 px-4 text-white hover:bg-indigo-600 focus:outline-none lg:mt-2 xl:mt-0 '>
              Log in
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}
