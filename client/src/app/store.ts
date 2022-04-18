/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features//counterSlice'
import api from '../services/moviesApi'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
