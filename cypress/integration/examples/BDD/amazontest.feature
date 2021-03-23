Feature: End to End ecommerce Validation

    Application Regression

    Scenario: Login into the application
    Given I open the Amazon Page
    When I Sign In with email ID and password on continue
    And I Validate with the Amazon home Page

    Scenario: Add OnePlus 8T to the cart
    Given I search for the product
    When I Select the product with price 
    And I add the product to the cart
    Then click on the cart Page
    And then delete the item in the cart