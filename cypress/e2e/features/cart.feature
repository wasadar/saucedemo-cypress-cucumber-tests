Feature: Adding items to cart

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

  Scenario: Opening cart
    When the user open the cart
    Then cart should be opened

  Scenario: Closing cart
    When the user open the cart
    And the user returns to the items list
    Then the item list should be shown

  Scenario Outline: Adding item to the cart
    When the user adds item <item> to the cart
    Then that <item> item should be in the cart

    Examples:
      | item |
      | "Sauce Labs Backpack" |
      | "Sauce Labs Bike Light" |
      | "Sauce Labs Bolt T-Shirt" |
      | "Sauce Labs Fleece Jacket" |
      | "Sauce Labs Onesie" |
      | "Test.allTheThings() T-Shirt (Red)" |

  Scenario Outline: Removing item from the cart (on page)
    When the user adds item <item> to the cart
    And the user removes item <item> from the cart on page
    Then the cart should be empty

    Examples:
      | item |
      | "Sauce Labs Backpack" |
      | "Sauce Labs Bike Light" |
      | "Sauce Labs Bolt T-Shirt" |
      | "Sauce Labs Fleece Jacket" |
      | "Sauce Labs Onesie" |
      | "Test.allTheThings() T-Shirt (Red)" |

  Scenario Outline: Removing item from the cart (in cart)
    When the user adds item <item> to the cart
    And the user removes item <item> from the cart in cart
    Then the cart should be empty

    Examples:
      | item |
      | "Sauce Labs Backpack" |
      | "Sauce Labs Bike Light" |
      | "Sauce Labs Bolt T-Shirt" |
      | "Sauce Labs Fleece Jacket" |
      | "Sauce Labs Onesie" |
      | "Test.allTheThings() T-Shirt (Red)" |