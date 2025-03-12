//Accedemos a nuestro custom commadns de login
describe('test custom commands', ()=>{
    it('test custom commands', ()=>{
        cy.login('standard_user','secret_sauce')
        //cy.wait(5000)
    })
})