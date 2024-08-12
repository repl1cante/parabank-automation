Cypress.Commands.add('typeUsername', (username) =>{
    cy.get('input[name="username"]').type(username);
})
Cypress.Commands.add('typePassword', (password) =>{
    cy.get('input[name="password"]').type(password);
})

//Cypress.Commands.add('clickLogin', () => {
//   cy.get('.button').contains('Log In').click();
// })

Cypress.Commands.add('clickLogin', () =>{
    cy.get('input[value="Log In"]').click();
})

