Feature: Navigate to website and select items

  Scenario Outline: open website and select item 

    Given user open the page
    * user selects Electronics section
    * user selects television and add to cart
    Then user verify item on the cart
