class ProductsPage{

    getProduct(){

        return cy.get('#item_4_title_link');
    }


    getProductBtn(){
        return cy.get('#add-to-cart-sauce-labs-backpack')
    }


    getShoppingCart(){
        return cy.get('#shopping_cart_container')
    }

    getCheckoutBtn(){
        return cy.get('#checkout')
    }
}

export default ProductsPage;