Feature: User Logout

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

  Scenario: Successful logout
    Given the user open sidemenu
    When the user clicks the logout button
    Then the user should not be logged in