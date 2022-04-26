import { ImageList, ImageListItem } from '@mui/material'
import Image from 'next/image'
import smoothscroll from 'smoothscroll-polyfill'

import { MovieInfoProps } from '../../../types/movieType'

export default function MovieInfo({ posters }: MovieInfoProps) {
  return (
    <ImageList
      sx={{
        width: '100%',
        height: '100%',
        padding: '0 1rem',
        scrollBehavior: 'smooth'
      }}
      cols={3}
    >
      {posters.posters.map(poster => (
        <ImageListItem key={poster.id}>
          <Image
            src={poster.link}
            width={1564}
            height={1564}
            alt={'laa'}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
