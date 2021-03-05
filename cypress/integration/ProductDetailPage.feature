Feature: Test the functionality around Product Detail Page

    Feature Description

Background: Perform all the background tasks before reching to Product Detail Page
    Given User is on the Amazon homepage
    When Search is performed with keyword 'Dresses'
    Then Search suggestion box result should have 'Dresses'
    And I select one of the options and press Search button
    And I select one of the product from listing page by 'Women 50s Vintage Sleeveless V'

Scenario: Validate the user is on the Product Detail Page
Then Product Detail Page should be displayed

Scenario: Validate that user is able to select a size and Add product to Cart
And I select a Size
And I click on Add to Cart Button