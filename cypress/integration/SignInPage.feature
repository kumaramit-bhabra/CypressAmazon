Feature: Sign In Page functionality

    Feature Description

Background: Perform all the background tasks before reching to Sign In Page
    Given User is on the Amazon homepage
    When Search is performed with keyword 'Dresses'
    Then Search suggestion box result should have 'Dresses'
    And I select one of the options and press Search button
    And I select one of the product from listing page by 'Women 50s Vintage Sleeveless V'
    Then Product Detail Page should be displayed
    And I select a Size
    And I click on Add to Cart Button
    And I click on checkout button

Scenario: Validate Sign in Page is displayed
    Then Sign in Page should be displayed

Scenario: Validate user is able to enter email id and click on Continue button
    And I enter the email Id
    And Click on continue button
    Then I should get the option to enter the password
    And I enter the password and click on Sign in button