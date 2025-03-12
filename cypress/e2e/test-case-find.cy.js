//método find, no busca desde la raíz, tenemos que darle el scope, buscara un hijo del elemento
describe('test find', ()=>{
    it('test case find text', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_wrapper-inner').find('#user-name').should('exist')// busca el elemento hijo de '.login-wrapper-inner'
        
        //cy.wait(3000) //agregamos una pausa
    })
})