Feature: To test search functionality provided on the amazon home page

    Feature Description

    Scenario: Validate that user is able to perform a search by keyword
    Given User is on the Amazon homepage
    When Search is performed with keyword 'Dresses'
    Then Search suggestion box result should have 'Dresses'
    And I select one of the options and press Search button