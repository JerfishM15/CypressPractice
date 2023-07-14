class FormPage{



    getFirstName(){
        return cy.get('#first-name');
    }
    
    getLastName(){
        return cy.get('#last-name');
    }

    getPostalCode(){
        return cy.get('#postal-code');
    }

    getContinueBtn(){
        return cy.get('#continue');
    }
}
export default FormPage;