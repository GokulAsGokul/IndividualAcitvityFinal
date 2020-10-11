@test
Feature: Validating the DemoBank site

  Scenario Outline: To validate whether user see the successful transaction message and reference number generated
    Given User is on demo bank application "http://demo.rapidtestpro.com/login.php" in browser
    When User enter the "<accountNumber>"and "<password>"
    And Click the Login button
    When User enter the valid "<PIN>" and click on validate button
    Then User should navigate to Home Page successfully
    And User clicks the FundTransfers option
    And User enters the "<rowQuery>" datas
    And User clicks the FundTransfers button
    And User enter the "<AuthorizationCode>" and click validate button
    Then User checks success message and reference no

    Examples: 
      | accountNumber | password   | PIN   |  | rowQuery  | AuthorizationCode |
      |    1234556666 | MavDemo@01 | 12345 |  | rowQuery1 |            123456 |
      |    1234556666 | MavDemo@01 | 12345 |  | rowQuery2 |            123456 |
      |    1234556666 | MavDemo@01 | 12345 |  | rowQuery3 |            123456 |
      |    1234556666 | MavDemo@01 | 12345 |  | rowQuery4 |            123456 |
      |    1234556666 | MavDemo@01 | 12345 |  | rowQuery5 |            123456 |
