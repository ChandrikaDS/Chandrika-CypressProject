/// <reference types ="Cypress"/>

class LoginPage {

    username()
    {
        return cy.get('input[type="email"]')
    }

    password()
    {
        return cy.get('input[type="password"]')
    }

    continue()
    {
        return cy.get('input[id="continue"]')
    }

    signIn()
    {
        return cy.get('input[id="signInSubmit"]')
    }

    signInPage()
    {
        return cy.get('a[data-nav-ref="nav_ya_signin"]')
    }
    homePage()
    {
        return cy.get('span[id="nav-link-accountList-nav-line-1"]')
    }
}
export default LoginPage;