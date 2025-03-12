//método closest, permite locacliar el ancestro de un elemento que ya esta/tenemos identificado
describe('test suite', ()=>{
    it('test case closest text', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').closest('#login_button_container').then(parent => {
            cy.log(parent.attr('class'))
        })// busca un elemento ancestro/ un elemento que esta por encima (padre- abuelo-...)
        
        
        //cy.wait(10000) //agregamos una pausa
    })
})