/// <reference types= "cypress"/>

import LoginPage from "../pageObjects/LoginPage"
import ProductsPage from "../pageObjects/ProductsPage";
import FormPage from "../pageObjects/FormPage";
import OverViewCO from "../pageObjects/OverviewCO";
import CompletePage from "../pageObjects/CompletePage";

describe('Some examples of test cases for practice',()=>{

    
   /* before(function(){

        cy.fixture('example.json').then((data)=>{
            userdata = data;
        })
    })
    */
    
it('Buy a product', ()=>{
    let userdata;
    //getting the data
    cy.fixture('example').then((data)=>{
        userdata = data;
   

    // declaring page objects
    const loginPage = new LoginPage;
    const productsPage = new ProductsPage;
    const formPage = new FormPage;
    const overViewPage = new OverViewCO;
    const completePage = new CompletePage;

    //login into the products page
    cy.visit(Cypress.env('url'))
    loginPage.getUsername().type(userdata.username)
    loginPage.getPassword().type(userdata.password)
    loginPage.getLogInBtn().click()

    // Assert product
   productsPage.getProduct().then(function(element){
        element.text().includes(userdata.productName)
    })

    //Add product
    productsPage.getProductBtn().click()
    
    //Going to shopping cart
    productsPage.getShoppingCart().click()

    // going to checkout page
    productsPage.getCheckoutBtn().click()

    //Filling the form
    formPage.getFirstName().type(userdata.firstName)
    formPage.getLastName().type(userdata.lastName)
    formPage.getPostalCode().type(userdata.postalCode)
    formPage.getContinueBtn().click()
    
    //Finalizing the purchase
    overViewPage.getFinishBtn().click()

    // Aseert the complete message
    completePage.getCompleteMsg().then(function(element){
        let message = element.text()
        message.includes(userdata.completeMsg);
    })




})
})


})