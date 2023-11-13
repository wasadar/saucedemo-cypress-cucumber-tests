Feature: External links

  Background: Login
    Given the user is on the login page
    When the user enters a login
    | login |
    | standard_user |
    And the user enters a password
    | password |
    | secret_sauce |
    And the user clicks the login button
    Then the item list should be shown

  Scenario: Twitter link
    Then the link on twitter should lead on twitter

  Scenario: Facebook link
    Then the link on facebook should lead on facebook

  Scenario: Linkedin link
    Then the link on linkedin should lead on linkedin

  Scenario Outline: Openning items pages
    When the user click on <item>
    Then <item> page should be opened

    Examples:
      | item |
      | "Sauce Labs Backpack" |
      | "Sauce Labs Bike Light" |
      | "Sauce Labs Bolt T-Shirt" |
      | "Sauce Labs Fleece Jacket" |
      | "Sauce Labs Onesie" |
      | "Test.allTheThings() T-Shirt (Red)" |