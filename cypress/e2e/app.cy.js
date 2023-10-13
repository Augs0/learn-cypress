describe('app', () => { 
    beforeEach(() => {
        cy.visit('/')
    })
    it('contains a h1', () => {
        cy.get('h1').contains('Country Search');
    })
    it('contains a search bar you can type in', () => {
        cy.get('#search').type('japan');
    });
 })