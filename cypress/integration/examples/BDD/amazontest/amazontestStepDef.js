
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import CartPage from "../../../../support/PageObjects/CartPage";
import HomePage from "../../../../support/PageObjects/HomePage";
import LoginPage from "../../../../support/PageObjects/LoginPage";
import ProductPage from "../../../../support/PageObjects/ProductPage";
/// <reference types ="Cypress"/>
const loginPage = new LoginPage()
const homePage = new HomePage()
const productPage = new ProductPage()
const cartPage = new CartPage()
let product;

Given('I open the Amazon Page',function ()
{
    cy.visit(Cypress.env('url'))
})

When('I Sign In with email ID and password on continue',function ()
{
   // loginPage.leftIcon.click()
    loginPage.signInPage().click()
    loginPage.username().type(this.data.username)
    loginPage.continue().click()
    loginPage.password().type(this.data.password)
    loginPage.signIn().click()
})

And('I Validate with the Amazon home Page',function ()
{
    loginPage.homePage().contains('Hello, chandrika')
})

Given('I search for the product',function ()
{
    homePage.searchBox().type('OnePlus 8T 5G')
    homePage.searchbutton().click()
})

When('I Select the product with price',function ()
{
    homePage.productSelectionlink().each(($el, index, $list) => {

        const text = $el.text()
        if(text.includes("OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)"))
        {
            homePage.productSelectionlink().invoke('removeAttr','target').eq(index).click()   
            return false
        }
    })
})

And('I add the product to the cart',function ()
{
    productPage.AddtoCartButton().click()
})

Then('click on the cart Page',function()
{

    productPage.sidecartButton().click()
})

And('then delete the item in the cart',function ()
{
    cartPage.delete().click()
})