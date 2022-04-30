import { Autocomplete, TextField } from '@mui/material'

import { useAppDispatch } from '@/app/hooks'
import { setSelectedMovie } from '@/features/SelectTop250Movie/SelectTop250MovieReducer'
import { useImDbTop250Query } from '@/services/movies-api'

const Top250SearchInput = () => {
	const { data, isLoading, error } = useImDbTop250Query()
	const dispatch = useAppDispatch()
	const top250Movies = data?.items?.map(movie => ({
		label: movie.title,
		id: movie.id
	}))
	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error!</div>
	return (
		<Autocomplete
			id='combo-box-demo'
			options={top250Movies ? top250Movies : []}
			sx={{ width: 300 }}
			renderInput={params => <TextField {...params} label='Movie' />}
			onChange={(e, value) => {
				dispatch(setSelectedMovie(value?.id || ''))
			}}
		/>
	)
}

export default Top250SearchInput
