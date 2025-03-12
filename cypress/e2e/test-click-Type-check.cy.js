// método CLICK

describe('Login', ()=>{
    it('Login con credenciales de standard user', ()=>{
        cy.visit('https://www.saucedemo.com/')
         cy.get('#login-button').click({force: true}) //pasamos la propiedad force
    })
})

// método Type, permite editar información en un input y también permite agregar que se pulse un tecla

describe('Login', ()=>{
    it('Login con credenciales de standard user', ()=>{
        cy.visit('https://www.saucedemo.com/')
         cy.get('#user-name').type('hola') 
         cy.get('#user-name').type('{enter}')  //pulsamos la tecla enter
        // cy.wait(10000)
    })
})

// método Check - Uncheck, para seleccionar radiobutton o checkboxes

describe('test assertions not...', ()=>{        //el not nos permite comprobar la negación de cualquier assertion anterior
    it('test case assertions not... cypress', ()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes')  
        cy.get('input[type="checkbox"]').eq(0).check() // con eq seleccionamos el checkbox del indice seleccionado
        cy.wait(1000)
        cy.get('input[type="checkbox"]').eq(0).uncheck() // con eq deselecinamos el checkbox del indice seleccionado
        //cy.wait(2000)
    })
})