describe('test assertions', ()=>{
    it('test case assertions cypress', ()=>{
        cy.visit('https://www.saucedemo.com/')        
        cy.get('#user-name').should('exist') // comprobamos que el elemento con el nombre title debería existir
        cy.get('.login_logo').should('have.text', 'Swag Labs') // comprobamos debería tener el texto 'Swag Labs'
        cy.get('#user-name').type('hola') // insertamos valor para prueba should('have.value')
        cy.get('#user-name').should('have.value','hola') // comprobamos que tenga el valor 'hola'
        cy.get('.login_logo').should('contain.text','Labs') // comprobamos que contengala palabra labs
        cy.get('#user-name').type('navidad') // insertamos valor para prueba should('contain.value')
        cy.get('#user-name').should('contain.value','dad') // comprobamos que el valro contega la cadena de caracteres 'dad'        
    })
})

describe('test assertions be.visible', ()=>{
    it('test case assertions be.visible cypress', ()=>{
        cy.visit('https://www.saucedemo.com/')
        // comprobamos que elemento existe en el DOM y no esta oculto. Primero hacemos login:
        cy.get('#user-name').type('standard_user') //buscamos el elemento con id: user-name y ponemos el valor indicado
        cy.get('#password').type('secret_sauce') //buscamos el elemento con id: password y ponemos el valor indicado
        cy.get('#login-button').click()
        cy.get('#react-burger-menu-btn').click()//desplegamos el subMenu para que este visible
        cy.get('.bm-menu-wrap').should('be.visible') // comprobamos que elemento existe en el DOM y no esta oculto
    })
})

describe('test assertions be.checked', ()=>{
    it('test case assertions be.checked cypress', ()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes')  
        cy.get('input[type="checkbox"]').eq(1).should('be.checked') // con eq seleccionamos el checkbox del indice seleccionado

    })
})

describe('test assertions not...', ()=>{        //el not nos permite comprobar la negación de cualquier assertion anterior
    it('test case assertions not... cypress', ()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes')  
        cy.get('input[type="checkbox"]').eq(0).should('not.be.checked') // con eq seleccionamos el checkbox del indice seleccionado

    })
})