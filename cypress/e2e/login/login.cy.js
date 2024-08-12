import '../../page/LoginPage/LoginPage'

//serve para descrever o teste
describe('Teste do Login', () => {

beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=AB4B8DF05E68A6AED2ABA81C0F6F48F2');
});

afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
})

//teste padrão de login
it('LoginTest', () => {
    cy.typeUsername('Tester123');
    cy.typePassword('1234');
    cy.clickLogin();
    cy.get('#leftPanel').contains('Welcome').should('be.visible');
})

//teste com login vazio
it('Login vazio', () => {

    cy.typePassword('1234');
    cy.clickLogin();
    cy.get('#rightPanel').contains('Please enter a username and password.').should('be.visible');
})

//teste com senha vazia
it('Login vazio', () => {
    cy.typeUsername('Tester123');
    cy.clickLogin();
    cy.get('.error').contains('Please enter a username and password.').should('be.visible');
})

// Este código abaixo estava funcionando no dia 10/08 até 12:00, Agora está apresentando erros ao ser utilizado, está conseguindo entrar em qualquer conta independente da senha que é colocada. Acredito que seja um problema de vulnerabilidade da plataforma que esteja sendo utilizada. Sempre logando na conta a qual eu criei, talvez esteja relacionado ao cache.

//teste de login com senha incorreta
it('Login de usuário com senha incorreta', () => {
    cy.typeUsername('Tester123');
    cy.typePassword('12345678910');
    cy.clickLogin();
    cy.get('.error').contains('The username and password could not be verified.').should('be.visible');

})

//teste de login com campo vazio
  it('Login de usuário com campos vazios', () => {
    cy.clickLogin();
    cy.get('.error').contains('Please enter a username and password.').should('be.visible');
})

})