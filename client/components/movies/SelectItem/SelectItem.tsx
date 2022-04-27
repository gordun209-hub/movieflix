import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectSortBy, setSortBy } from '@/features/FilterContentBy/FilterContentBy'

const SelectItem = () => {
	const sortBy = useAppSelector(selectSortBy)
	const dispatch = useAppDispatch()

	return (
		<Box data-cy={'infoButton'} justifySelf={'end'} p={2}>
			<FormControl>
				<InputLabel id='demo-simple-select-label'>SortBy</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={sortBy}
					label='Age'
					onChange={e => dispatch(setSortBy(e.target.value))}
				>
					<MenuItem data-cy={'imdb-rating'} value={'imdb-rating'}>
						imdb rating
					</MenuItem>
					<MenuItem data-cy={'number-of-votes'} value={'number-of-votes'}>
						number of votes
					</MenuItem>
					<MenuItem data-cy={'title'} value={'title'}>
						{' '}
						title
					</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

export default SelectItem
