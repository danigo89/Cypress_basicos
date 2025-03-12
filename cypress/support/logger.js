export class Logger{
    static pasoNumero(numero){
        const mensage = `Step # ${numero}`;
        cy.log(`**${mensage}**`);  // Se loguea en CYPREESS
        cy.allure().step(mensage);  // SE loguea en el REgistro de Pruebas
    }

    static paso(description){
        const mensage = `Paso - ${description}`;
        cy.log(`**${mensage}**`);
        cy.allure().step(mensage);
    }

    static verificacion(description){
        const mensage = `Verificacion - ${description}`;
        cy.log(`**${mensage}**`);
        cy.allure().step(mensage);
    }
}