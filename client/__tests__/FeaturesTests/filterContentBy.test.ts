import reducer, { setSortBy } from '@/features/FilterContentBy/FilterContentBy'

describe('FilterContentBy reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, { type: undefined })).toEqual({
			sortBy: 'imdb-rating'
		})
	})
	it('should handle setSortBy', () => {
		expect(reducer({ sortBy: 'imdb-rating' }, setSortBy('title'))).toEqual({
			sortBy: 'title'
		})
	})
	it('should handle setSortBys', () => {
		expect(reducer({ sortBy: 'imdb-rating' }, setSortBy('number-of-votes'))).toEqual({
			sortBy: 'number-of-votes'
		})
	})
})
