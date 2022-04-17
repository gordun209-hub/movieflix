import Link from 'next/link'

const Header = () => {
  const navigation = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Movies',
      path: '/movies'
    },

    {
      name: 'Actors',
      path: '/actors'
    }
  ]
  return (
    <>
      <div>
        <div>
          <nav>
            <ul>
              {navigation.map(({ name, path }) => (
                <li key={name}>
                  <Link href={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
