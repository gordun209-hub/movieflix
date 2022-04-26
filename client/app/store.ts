/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit'

import contentToShowReducer from '../features/ContentToShow/contentToShowSlice'
import FilterContentReducer from '../features/FilterContentBy/FilterContentBy'
import api from '../services/moviesApi'

export const store = configureStore({
  reducer: {
    contentToShow: contentToShowReducer,
    filterContent: FilterContentReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
