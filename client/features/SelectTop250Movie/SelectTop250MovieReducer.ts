import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/app/store'

type SelectedMovie = {
	id: string | undefined
}

const initialState: SelectedMovie = {
	id: undefined
}

const selectMovieSlice = createSlice({
	name: 'selectedMovie',
	initialState,
	reducers: {
		setSelectedMovie: (state, action: PayloadAction<string>) => {
			state.id = action.payload
		}
	}
})

export const { setSelectedMovie } = selectMovieSlice.actions
export default selectMovieSlice.reducer
export const selectSelectedMovie = (state: RootState) => state.selectMovie.id
