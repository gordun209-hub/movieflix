import reducer, {
	hideActors,
	hideBoxOffice,
	hidePosters,
	showActors,
	showBoxOffice,
	showPosters
} from '@/features/ContentToShow/contentToShowSlice'

describe('ContentToShow reducer', () => {
	it('should return the initial state', () => {
		expect(
			reducer(undefined, {
				type: undefined
			})
		).toEqual({
			showActors: false,
			showBoxOffice: false,
			showPosters: false
		})
	})
	it('should handle hideActors', () => {
		expect(reducer({ showActors: true, showBoxOffice: false, showPosters: false }, hideActors())).toEqual({
			showActors: false,
			showBoxOffice: false,
			showPosters: false
		})
	})
	it('should handle showActors', () => {
		expect(reducer({ showActors: false, showBoxOffice: false, showPosters: false }, showActors())).toEqual({
			showActors: true,
			showBoxOffice: false,
			showPosters: false
		})
	})
	it('should handle hidePosters', () => {
		expect(reducer({ showActors: false, showBoxOffice: false, showPosters: true }, hidePosters())).toEqual({
			showActors: false,
			showBoxOffice: false,
			showPosters: false
		})
	})
	it('should handle showPosters', () => {
		expect(reducer({ showActors: false, showBoxOffice: false, showPosters: false }, showPosters())).toEqual({
			showActors: false,
			showBoxOffice: false,
			showPosters: true
		})
	})
	it('should handle hideBoxOffice', () => {
		expect(reducer({ showActors: false, showBoxOffice: true, showPosters: false }, hideBoxOffice())).toEqual({
			showActors: false,
			showBoxOffice: false,
			showPosters: false
		})
	})
	it('should handle showBoxOffice', () => {
		expect(reducer({ showActors: false, showBoxOffice: false, showPosters: false }, showBoxOffice())).toEqual({
			showActors: false,
			showBoxOffice: true,
			showPosters: false
		})
	})
})
