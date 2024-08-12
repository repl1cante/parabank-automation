import '../../page/RegisterPage/RegisterPage'

// Função para gerar um username dinâmico
function generateUsername() {
  const randomNum = Math.floor(Math.random() * 10000); // Gera um número aleatório entre 0 e 9999
  return `Tester${randomNum}`; // vai concatenar "Tester" com o número aleatório
}

//Descreve o conjunto de testes de registro
describe('REGISTER USER TESTS', () => {


beforeEach(()=>{
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('https://parabank.parasoft.com/parabank/register.htm');

});

//Teste para registrar um usuário válido
  it('REGISTER USER VALID', () => {
    const dynamicUsername = generateUsername(); // Gera o username dinâmico

    cy.typeFirstName('Guto');
    cy.typeLastName('Tester');
    cy.typeStreet('Rua dos bobos, 0');
    cy.typeCity('Rio de Janeiro');
    cy.typeState('Rio de Janeiro');
    cy.typeZipCode('21010000');
    cy.typePhoneNumber('21010000');
    cy.typeSSN('00000000000');

    cy.typeUserName(dynamicUsername);
    cy.typePassword('12345678');
    cy.typeRepeatedPassword('12345678');

    cy.ClickRegister();
    cy.get('#rightPanel').contains('Your account was created successfully. You are now logged in.').should('be.visible');
  });

  //Tentar registrar usuário sem nome
  it('noUsername', () => {
    const dynamicUsername = generateUsername(); // Gera o username dinâmico

    cy.typeLastName('Tester');
    cy.typeStreet('Rua dos Bobos, 0');
    cy.typeCity('Rio de Janeiro');
    cy.typeState('Rio de Janeiro');
    cy.typeZipCode('21010000');
    cy.typePhoneNumber('21900000000');
    cy.typeSSN('00000000000');

    cy.typeUserName(dynamicUsername);
    cy.typePassword('12345678');
    cy.typeRepeatedPassword('12345678');

    cy.ClickRegister();
    cy.get('#customer\\.firstName\\.errors').contains('First name is required').should('be.visible');
  });

//Tentar registrar usuario com senhas diferentes
it('differentPasswords', () =>{
  const dynamicUsername = generateUsername(); // Gera o username dinâmico

    cy.typeFirstName('Guto')
    cy.typeLastName('Tester');
    cy.typeStreet('Rua dos Bobos, 0');
    cy.typeCity('Rio de Janeiro');
    cy.typeState('Rio de Janeiro');
    cy.typeZipCode('21010000');
    cy.typePhoneNumber('21900000000');
    cy.typeSSN('00000000000');

    cy.typeUserName(dynamicUsername);
    cy.typePassword('12345678');
    cy.typeRepeatedPassword('123456789');

    cy.ClickRegister();
    cy.get('#repeatedPassword\\.errors').contains('Passwords did not match').should('be.visible');
});

// Teste para tentar registrar um usuário que já foi cadastrado
it('existingUser', () => {
  const existingUsername = 'ExistingTester123'; // Nome de usuário fixo para o teste

   // Primeiro, cria o usuário existente

  //  cy.typeFirstName('Guto');
  //  cy.typeLastName('Tester');
  //  cy.typeStreet('Rua dos Bobos, 0');
  //  cy.typeCity('Rio de Janeiro');
  //  cy.typeState('Rio de Janeiro');
  //  cy.typeZipCode('21010000');
  //  cy.typePhoneNumber('21900000000');
  //  cy.typeSSN('00000000000');
  //  cy.typeUserName(existingUsername); // Usa um nome de usuário fixo
  //  cy.typePassword('12345678');
  //  cy.typeRepeatedPassword('12345678');
  //  cy.ClickRegister();
  //  cy.get('#rightPanel').contains('Your account was created successfully. You are now logged in.').should('be.visible');

   // Agora tenta registrar o mesmo nome de usuário novamente
   cy.visit('https://parabank.parasoft.com/parabank/register.htm');
   cy.typeFirstName('Guto');
   cy.typeLastName('Tester');
   cy.typeStreet('Rua dos Bobos, 0');
   cy.typeCity('Rio de Janeiro');
   cy.typeState('Rio de Janeiro');
   cy.typeZipCode('21010000');
   cy.typePhoneNumber('21900000000');
   cy.typeSSN('00000000000');
   cy.typeUserName(existingUsername); // Usa o mesmo nome de usuário
   cy.typePassword('12345678');
   cy.typeRepeatedPassword('12345678');
   cy.ClickRegister();
   cy.get('.error').contains('This username already exists.').should('be.visible'); // Mensagem de erro esperada
});

});