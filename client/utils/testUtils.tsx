/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/export */
import { configureStore } from '@reduxjs/toolkit'
import { render as rtlRender } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'

// Import your own reducer
import contentToShowReducer from '@/features/ContentToShow/contentToShowSlice'
import FilterContentReducer from '@/features/FilterContentBy/FilterContentBy'
import { api } from '@/services/movies-api'

// function render(
// 	ui: JSX.Element,
// 	{
// 		//@ts-ignore
// 		preloadedState,
// 		store = configureStore({
// 			reducer: {
// 				contentToShow: contentToShowReducer,
// 				filterContent: FilterContentReducer,
// 				[api.reducerPath]: api.reducer
// 			},
// 			middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
// 		}),

// 		...renderOptions
// 	} = {}
// ) {
// 	function Wrapper({ children }: { children: React.ReactNode }) {
// 		return <Provider store={store}>{children}</Provider>
// 	}
// 	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
// }

// // re-export everything

function render(
	ui: JSX.Element,
	{
		store = configureStore({
			reducer: {
				contentToShow: contentToShowReducer,
				filterContent: FilterContentReducer,
				[api.reducerPath]: api.reducer
			},
			middleware: getDefaultMiddleware => [...getDefaultMiddleware(), api.middleware]
		})
	} = {}
) {
	const Wrapper = ({ children }: { children: React.ReactNode }) => {
		return <Provider store={store}>{children}</Provider>
	}
	return rtlRender(ui, { wrapper: Wrapper })
}
export * from '@testing-library/react'
// override render method
export { render }
