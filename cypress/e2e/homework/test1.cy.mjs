const firstBookStub = {
    "isbn": "9781449325862",
    "title": "My homework in Hillel It School",
    "subTitle": "A Working Introduction",
    "author": "Richard E. Silverman",
    "publish_date": "2020-06-04T08:48:39.000Z",
    "publisher": "O'Reilly Media", "pages": 234,
    "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp", "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
}


describe('stub server responces', () => {
    it('change title of first book', () => {
        cy.visit('/books');
        cy.intercept('GET', 'BookStore/v1/Book?ISBN=9781449325862', firstBookStub);
        cy.get('.mr-2').contains('Git Pocket Guide').click();
        cy.get('#title-wrapper #userName-value').contains(firstBookStub.title)
            .should('be.visible')
    });
});