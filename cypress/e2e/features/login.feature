Feature: User Login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters a login
    | login |
    | standard_user |
    And the user enters a password
    | password |
    | secret_sauce |
    And the user clicks the login button
    Then the item list should be shown

  Scenario: Login with invalid login
    Given the user is on the login page
    When the user enters a login
    And the user enters a password
    | password |
    | secret_sauce |
    And the user clicks the login button
    Then the system should display an error message
    | error |
    | Epic sadface: Username and password do not match any user in this service |
    And the user should not be logged in

  Scenario: Login with invalid password
    Given the user is on the login page
    When the user enters a login
    | login |
    | standard_user |
    And the user enters a password
    And the user clicks the login button
    Then the system should display an error message 
    | error |
    | Epic sadface: Username and password do not match any user in this service |
    And the user should not be logged in