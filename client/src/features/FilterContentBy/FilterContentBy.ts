import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'

interface SortBy {
  sortBy: string
}
const initialState: SortBy = {
  sortBy: 'imdb-rating'
}

const FilterContentSlice = createSlice({
  name: 'sortBy',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    }
  }
})

export const { setSortBy } = FilterContentSlice.actions
export default FilterContentSlice.reducer
export const selectSortBy = (state: RootState) => state.filterContent.sortBy
