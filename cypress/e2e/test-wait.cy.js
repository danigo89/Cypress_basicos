// Wait, es recomendable no usarlo

const { timeout } = require("rxjs")

describe('test no wait', ()=>{
    it('test wait', ()=>{
        cy.visit('https://accounts.shopify.com/')
        cy.get('img[alt="Log in to Shopify"]', {timeout: 2000}).click() // intentara encontrar el elemento imagén y esperará hast 10 segundos a ver si lo encuentra. si llega a 10 y no lo encontró FALLARA
    })
})