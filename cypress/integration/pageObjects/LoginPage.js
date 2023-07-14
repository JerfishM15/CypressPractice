class LoginPage{


    getUsername(){

        return cy.get('#user-name');
    }

    getPassword(){

        return cy.get('#password');
    }


    getLogInBtn(){

        return cy.get('#login-button');
    }
}

export default LoginPage;