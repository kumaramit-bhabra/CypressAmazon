Feature: Validate the shopping Basket Page

    Feature Description

Background: Perform all the background tasks before reching to Product Detail Page
    Given User is on the Amazon homepage
    When Search is performed with keyword 'Dresses'
    Then Search suggestion box result should have 'Dresses'
    And I select one of the options and press Search button
    And I select one of the product from listing page by 'Casual Suspender Skirts Basic High Waist Flared'
    Then Product Detail Page should be displayed
    And I select a Size
    And I click on Add to Cart Button

Scenario: Validate the shopping Bag
    Then Correct Price should be displayed in the shopping bag

Scenario: User is able to proceed to checkout
    And I click on checkout button