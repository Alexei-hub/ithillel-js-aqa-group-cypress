describe('checking selected element', () => {
    it('select private and check appearing message', () => {
        cy.visit('checkbox');
        cy.get('.rct-text').find('button').click();
        cy.get('label[for="tree-node-documents"]').prev('button').click();
        cy.get('label[for="tree-node-office"]').prev('button').click();
        cy.get('label[for="tree-node-private"] .rct-checkbox svg').click();
        cy.get('#result').contains('You have selected :private').should('be.visible');
    });
});

