Feature: Functionality around Product Listing Page

    Feature Description

Background: Perform all the background tasks before reching to Product Listing Page
    Given User is on the Amazon homepage
    When Search is performed with keyword 'Dresses'
    Then Search suggestion box result should have 'Dresses'
    And I select one of the options and press Search button

Scenario:  Validate that Product Listing Page is displayed
    Then Correct layout should be displayed for Product Listing Page

Scenario: Validate user is able to select one of the products by description
    And I select one of the product from listing page by 'Women 50s Vintage Sleeveless V'

Scenario: Validate user is able to select one of the products by price
    And I select one of the product from listing page by price