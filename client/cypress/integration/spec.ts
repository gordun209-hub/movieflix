describe('My First Test', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})
	it('clicks movies button and sees images', () => {
		cy.get('[data-cy="movies"]').click()
		cy.get('[data-cy="tt1877830"] > .bg-slate-500').should('be.visible').contains('The Batman')
		cy.scrollTo('bottom').url().should('include', '/movies')
	})
	it('clicks the action genre and sees movies', () => {
		cy.get('[data-cy="movies"]', { timeout: 100000 }).click()
		cy.get('[data-cy="action"]', { timeout: 100000 }).click()
		cy.get('[data-cy="tt1877830"] > .bg-slate-500').should('be.visible').contains('The Batman')
		cy.scrollTo('bottom').url().should('include', 'movies/action')
	})
})

describe('can navigate between genres', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})
	it('clicks movies button and sees images', () => {
		cy.get('[data-cy="movies"]', { timeout: 100000 }).click()

		cy.scrollTo('bottom').url().should('include', '/movies')
	})
	it('clicks the action genre and sees movies', () => {
		cy.get('[data-cy="movies"]').click()
		cy.get('[data-cy="action"]').click()

		cy.scrollTo('bottom').url().should('include', 'movies/action')
	})
	it('clicks the comedy genre and sees movies', () => {
		cy.get('[data-cy="movies"]').click()
		cy.get('[data-cy="comedy"]').click()

		cy.scrollTo('bottom').url().should('include', 'movies/comedy')
	})
	it('clicks the horror genre and sees movies', () => {
		cy.get('[data-cy="movies"]').click()
		cy.get('[data-cy="horror"]').click()

		cy.scrollTo('bottom').url().should('include', 'movies/horror')
	})
})
