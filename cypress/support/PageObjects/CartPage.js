/// <reference types ="Cypress"/>

class CartPage{

    delete()
    {
      return  cy.get('input[value="Delete"]')
    }
}
export default CartPage;