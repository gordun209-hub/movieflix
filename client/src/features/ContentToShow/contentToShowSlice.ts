import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

interface ContentToShowState {
  showActors: boolean
  showPosters: boolean
  showBoxOffice: boolean
}

const initialState: ContentToShowState = {
  showActors: false,
  showPosters: false,
  showBoxOffice: false
}

const contentToShowSlice = createSlice({
  name: 'contentToShow',
  initialState,
  reducers: {
    showActors: state => {
      state.showActors = true
      state.showBoxOffice = false
      state.showPosters = false
    },
    hideActors: state => {
      state.showActors = false
      state.showBoxOffice = false
      state.showPosters = false
    },
    showPosters: state => {
      state.showPosters = true
      state.showBoxOffice = false
      state.showActors = false
    },
    hidePosters: state => {
      state.showPosters = false
      state.showBoxOffice = false
      state.showActors = false
    },
    showBoxOffice: state => {
      state.showBoxOffice = true
      state.showPosters = false
      state.showActors = false
    },
    hideBoxOffice: state => {
      state.showBoxOffice = false
      state.showPosters = false
      state.showActors = false
    }
  }
})

export const {
  showActors,
  hideActors,
  showPosters,
  hidePosters,
  showBoxOffice,
  hideBoxOffice
} = contentToShowSlice.actions

export const selectShowActors = (state: RootState) =>
  state.contentToShow.showActors
export const selectShowPosters = (state: RootState) =>
  state.contentToShow.showPosters
export const selectShowBoxOffice = (state: RootState) =>
  state.contentToShow.showBoxOffice
export default contentToShowSlice.reducer
