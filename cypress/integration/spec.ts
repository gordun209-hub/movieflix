describe('My First Test', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})
	it('clicks movies button and sees images', () => {
		cy.get('[href="/movies"]').click()
		cy.get('[data-cy="tt1877830"] > .css-1jf8mhn').should('be.visible').contains('The Batman')
		cy.scrollTo('bottom').url().should('include', '/movies')
	})
	it('clicks the action genre and sees movies', () => {
		cy.get('[href="/movies"]').click()
		cy.get('[data-cy="action"] > .MuiTypography-root').click()
	})
})

describe('can navigate between genres', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	it('clicks the comedy genre and sees movies', () => {
		cy.get('[href="/movies"]').click()
		cy.get('[data-cy="comedy"]').click()
		cy.scrollTo('bottom').url().should('include', 'movies/comedy')
	})
	it('clicks the horror genre and sees movies', () => {
		cy.get('[href="/movies"]').click()
		cy.get('[data-cy="horror"]').click()

		cy.scrollTo('bottom').url().should('include', 'movies/horror')
	})
})
