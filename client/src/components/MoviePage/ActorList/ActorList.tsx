import { Card, Divider } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import * as React from 'react'

export type ActorList = {
  actorList: {
    id: string
    name: string
    image: string
    asCharacter: string
  }[]
}
export function ActorList({ actorList }: ActorList) {
  return (
    <Box>
      <Divider
        sx={{
          borderColor: 'gray.300',
          borderWidth: '1px',
          borderStyle: 'solid',
          margin: '20px 0px 20px 0px'
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          padding: '0px',
          margin: '0px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          {actorList.map(({ id, name, image, asCharacter }) => (
            <Card
              key={id}
              variant='outlined'
              sx={{
                maxWidth: '100px',
                textAlign: 'center'
              }}
            >
              <Image src={image} width={100} height={100} />
              <Typography variant='body1'>{name}</Typography>
              <Divider />
              <Typography variant='body1'>{asCharacter}</Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
