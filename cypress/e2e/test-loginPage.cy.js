import { LoginPage } from "./loginPage"

const loginPage = new LoginPage(); // para métodos no static

describe( 'test loginPage', () =>{
    it('test ', ()=>{
        const titulo = LoginPage.obtenerTituloPagina() ;
        //const tituloNoStatic = loginPage.obtenerTituloPagina() ; // para métodos no static
        cy.log(titulo);
        cy.wait(5000);
        cy.visit('https://www.demoblaze.com/index.html');
        LoginPage.linkDeLogin.click();
        cy.wait(5000);
    })
})