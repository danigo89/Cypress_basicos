//nomenclatura usada Mokka, Cypress solo permite selectores en formato CSS
describe('test case innerText', ()=>{
    it('test case inner text', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.contains('div','Swag Labs').then(title =>{
            cy.log(title.attr('class'))
        })
        //cy.wait(3000) //agregamos una pausa
    })
})