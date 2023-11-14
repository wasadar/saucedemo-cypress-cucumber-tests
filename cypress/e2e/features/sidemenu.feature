Feature: Sidemenu

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

  Scenario: Open sidemenu
    Given the user open sidemenu
    Then the sidemenu should be opened

  Scenario: Close sidemenu
    Given the user open sidemenu
    When the user closes sidemenu
    Then the sidemenu should be closed