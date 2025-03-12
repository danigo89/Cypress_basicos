export class LoginPage{
    
    static obtenerTituloPagina(){
        return 'Log in';
    }

    //getter
    static get linkDeLogin(){
        return cy.get('a[data-target="#logInModal"]')
    }
}