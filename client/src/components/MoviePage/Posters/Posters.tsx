import { ImageList, ImageListItem } from '@mui/material'
import Image from 'next/image'

type MovieInfoProps = {
  posters: {
    imdb: string
    title: string
    fullTitle: string
    year: string
    type: string
    errorMessage: string | null
    posters: {
      link: string
      id: string
    }[]
  }
}
function Posters({ posters }: MovieInfoProps) {
  return (
    <ImageList
      sx={{
        width: '100%',
        height: 'full',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      cols={4}
    >
      {posters.posters.map(poster => (
        <ImageListItem key={poster.id}>
          <Image
            src={`${poster.link}?w=164&h=164&fit=crop&auto=format`}
            width={164}
            height={164}
            alt={'laa'}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default Posters
