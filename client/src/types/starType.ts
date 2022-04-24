export type TStar = {
  id: string
  name: string
  role: string
  image: string
  summary: string
  birthDate: string
  deathDate: string | null
  awards: string
  height: string
  knownFor: {
    id: string
    title: string
    fullTitle: string
    year: string
    role: string
    image: string
  }[]
  castMovies: {
    id: string
    role: string
    title: string
    year: string
    description: string
  }[]
  errorMessage: string | null
}
