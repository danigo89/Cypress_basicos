//nomenclatura usada Mokka
describe('Login', ()=>{
    it('Login con credenciales de standard user', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user') //buscamos el elemento con id: user-name y ponemos el valor indicado
        cy.get('#password').type('secret_sauce') //buscamos el elemento con id: password y ponemos el valor indicado
        cy.get('#login-button').click() //buscamos el elemento Correspondiente al botón de Login id: login-button y hacemos  click
        cy.get('.title').should('exist') // comprobamos que el elemento con el nombre title debería existir
    })
})