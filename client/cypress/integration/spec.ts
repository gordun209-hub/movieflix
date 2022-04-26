// import function from the application source
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[href="/movies"]').click()
  })
})

// uncomment to get a lint error
// const aCypressString: string = 42;
