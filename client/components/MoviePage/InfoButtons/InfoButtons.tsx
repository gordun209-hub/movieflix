import { Box, Button, ButtonGroup } from '@mui/material'
import smoothscroll from 'smoothscroll-polyfill'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
  hideActors,
  hideBoxOffice,
  hidePosters,
  selectShowActors,
  selectShowBoxOffice,
  selectShowPosters,
  showActors,
  showBoxOffice,
  showPosters
} from '../../../features/ContentToShow/contentToShowSlice'

const InfoButtons = () => {
  const isShowPosters = useAppSelector(selectShowPosters)
  const isShowActors = useAppSelector(selectShowActors)
  const isShowBoxOffice = useAppSelector(selectShowBoxOffice)
  const dispatch = useAppDispatch()
  return (
    <Box>
      <ButtonGroup
        sx={{
          display: 'flex',

          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: '30px'
        }}
      >
        <Button
          type='button'
          onClick={() => {
            isShowActors ? dispatch(hideActors()) : dispatch(showActors())
          }}
        >
          See Actors
        </Button>
        <Button
          type='button'
          onClick={() =>
            isShowBoxOffice
              ? dispatch(hideBoxOffice())
              : dispatch(showBoxOffice())
          }
        >
          See Box Office
        </Button>
        <Button
          type='button'
          onClick={() =>
            isShowPosters ? dispatch(hidePosters()) : dispatch(showPosters())
          }
        >
          See Posters
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default InfoButtons
