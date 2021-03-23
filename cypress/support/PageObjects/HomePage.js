/// <reference types ="Cypress"/>

class HomePage{

    searchBox()
    {
       return cy.get('#twotabsearchtextbox')
    }

    searchbutton()
    {
      return  cy.get('.nav-search-submit-text')
    }

    productSelectionlink()
    {
      return cy.get('a[class="a-link-normal a-text-normal"]')
    }

}
export default HomePage;