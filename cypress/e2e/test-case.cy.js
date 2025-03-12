//nomenclatura usada Mokka, Cypress solo permite selectores en formato CSS
describe('test case', ()=>{
    it('test case', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').as('username') //agregamos un alias a nuestro elemento

        cy.get('@username').type('hello')
        //cy.wait(2000) //agregamos una pausa
    })
})