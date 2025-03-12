//método eq, cuando tenemos variso elementos con la misma distinción y no sabemos con distinguirlos
describe('test eq', ()=>{
    it('test case eq text', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('.form_input').eq(1).type('algo')// pasamos el indice desde 0 hasta N ...
        
        
        //cy.wait(3000) //agregamos una pausa
    })
})