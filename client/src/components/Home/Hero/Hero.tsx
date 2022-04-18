import Image from 'next/image'

export default function Hero() {
  return (
    <section className='text-info-dark body-font bg-brand-light'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-darkest'>
            Explore Movies and Celebrities
            <br className='hidden lg:inline-block' />
            on MovieFlix
          </h1>
          <p className='mb-8 leading-relaxed text-gray-darkest'>
            MovieFlix is a movie and celebrity discovery platform that connects
            you with the people and movies you love. Before going to cinema, you
            need to know the best movies and celebrities. This is the place to
            find out. MovieFlix is a place to find movies and celebrities.
          </p>
          <div className='flex justify-center'>
            <button
              type='button'
              className='inline-flex text-info-light bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            >
              Explore
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg text-info-light lg:w-full md:w-1/2 w-5/6'>
          <Image
            className='object-cover object-center rounded'
            alt='hero'
            width={720}
            height={600}
            src='/once.jpeg'
          />
        </div>
      </div>
    </section>
  )
}
