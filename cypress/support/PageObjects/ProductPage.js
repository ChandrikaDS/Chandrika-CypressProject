/// <reference types ="Cypress"/>

class ProductPage {

    AddtoCartButton()
    {
        return cy.get('#add-to-cart-button')
    }

    cartButton()
    {
        return cy.get('a[id="hlb-view-cart-announce"]')
    }
    sidecartButton()
    {
        return cy.get('span[id="attach-sidesheet-view-cart-button"]')
    }
} 
export default ProductPage;