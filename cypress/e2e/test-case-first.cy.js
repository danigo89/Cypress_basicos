//método first, muestraa el primer elemento entre varios que tengan la misma identificación
describe('test first', ()=>{
    it('test case first text', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('.form_input').first('#user-name').type('Hola')// solo seleccionamos el primer elemento
        

        //cy.wait(3000) //agregamos una pausa
    })
})