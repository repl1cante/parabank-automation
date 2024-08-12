Cypress.Commands.add('typeFirstName' , (firstName) =>{
    cy.get('#customer\\.firstName').type(firstName)
})

Cypress.Commands.add('typeLastName', (lastName) =>{
    cy.get('#customer\\.lastName').type(lastName);
})

Cypress.Commands.add('typeStreet', (street) =>{
    cy.get('#customer\\.address\\.street').type(street);
})

Cypress.Commands.add('typeCity', (city) =>{
    cy.get('#customer\\.address\\.city').type(city);
})
Cypress.Commands.add('typeState', (state) =>{
    cy.get('#customer\\.address\\.state').type(state);
})
Cypress.Commands.add('typeZipCode', (zipCode) =>{
    cy.get('#customer\\.address\\.zipCode').type(zipCode);
})
Cypress.Commands.add('typePhoneNumber', (phoneNumber) =>{
    cy.get('#customer\\.phoneNumber').type(phoneNumber);
})
Cypress.Commands.add('typeSSN', (SSN) =>{
    cy.get('#customer\\.ssn').type(SSN);
})
Cypress.Commands.add('typeUserName', (username) =>{
    cy.get('#customer\\.username').type(username);
})
Cypress.Commands.add('typePassword', (password) =>{
    cy.get('#customer\\.password').type(password);
})
Cypress.Commands.add('typeRepeatedPassword', (repeatedPassword) =>{
    cy.get('#repeatedPassword').type(repeatedPassword);
})

Cypress.Commands.add('ClickRegister', () => {
    cy.get('.button').contains('Register').click();
})