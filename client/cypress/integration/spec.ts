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
		cy.get('[data-cy="movies"]').click()
		cy.get('[data-cy="action"]').click()
		cy.get('[data-cy="tt1877830"] > .bg-slate-500').should('be.visible').contains('The Batman')
		cy.scrollTo('bottom').url().should('include', 'movies/action')
	})
})
