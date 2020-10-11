$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/DemoBank.feature");
formatter.feature({
  "name": "Validating the DemoBank site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on demo bank application \"http://demo.rapidtestpro.com/login.php\" in browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter the \"\u003caccountNumber\u003e\"and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid \"\u003cPIN\u003e\" and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page successfully",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks the FundTransfers option",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the \"\u003crowQuery\u003e\" datas",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfers button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the \"\u003cAuthorizationCode\u003e\" and click validate button",
  "keyword": "And "
});
formatter.step({
  "name": "User checks success message and reference no",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "accountNumber",
        "password",
        "PIN",
        "",
        "rowQuery",
        "AuthorizationCode"
      ]
    },
    {
      "cells": [
        "1234556666",
        "MavDemo@01",
        "12345",
        "",
        "rowQuery1",
        "123456"
      ]
    },
    {
      "cells": [
        "1234556666",
        "MavDemo@01",
        "12345",
        "",
        "rowQuery2",
        "123456"
      ]
    },
    {
      "cells": [
        "1234556666",
        "MavDemo@01",
        "12345",
        "",
        "rowQuery3",
        "123456"
      ]
    },
    {
      "cells": [
        "1234556666",
        "MavDemo@01",
        "12345",
        "",
        "rowQuery4",
        "123456"
      ]
    },
    {
      "cells": [
        "1234556666",
        "MavDemo@01",
        "12345",
        "",
        "rowQuery5",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on demo bank application \"http://demo.rapidtestpro.com/login.php\" in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HooksClass.user_is_on_demo_bank_application_in_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"1234556666\"and \"MavDemo@01\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDef.click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid \"12345\" and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enter_the_valid_and_click_on_validate_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.user_should_navigate_to_Home_Page_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfers option",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDef.user_clicks_the_FundTransfers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"rowQuery1\" datas",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_enters_the_datas(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfers button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_clicks_the_FundTransfers_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"123456\" and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_enter_the_and_click_validate_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks success message and reference no",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDef.user_checks_success_message_and_reference_no()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on demo bank application \"http://demo.rapidtestpro.com/login.php\" in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HooksClass.user_is_on_demo_bank_application_in_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"1234556666\"and \"MavDemo@01\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDef.click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid \"12345\" and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enter_the_valid_and_click_on_validate_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.user_should_navigate_to_Home_Page_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfers option",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDef.user_clicks_the_FundTransfers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"rowQuery2\" datas",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_enters_the_datas(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfers button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_clicks_the_FundTransfers_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"123456\" and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_enter_the_and_click_validate_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks success message and reference no",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDef.user_checks_success_message_and_reference_no()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on demo bank application \"http://demo.rapidtestpro.com/login.php\" in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HooksClass.user_is_on_demo_bank_application_in_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"1234556666\"and \"MavDemo@01\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDef.click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid \"12345\" and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enter_the_valid_and_click_on_validate_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.user_should_navigate_to_Home_Page_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfers option",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDef.user_clicks_the_FundTransfers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"rowQuery3\" datas",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_enters_the_datas(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfers button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_clicks_the_FundTransfers_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"123456\" and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_enter_the_and_click_validate_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks success message and reference no",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDef.user_checks_success_message_and_reference_no()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on demo bank application \"http://demo.rapidtestpro.com/login.php\" in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HooksClass.user_is_on_demo_bank_application_in_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"1234556666\"and \"MavDemo@01\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDef.click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid \"12345\" and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enter_the_valid_and_click_on_validate_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.user_should_navigate_to_Home_Page_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfers option",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDef.user_clicks_the_FundTransfers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"rowQuery4\" datas",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_enters_the_datas(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfers button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_clicks_the_FundTransfers_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"123456\" and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_enter_the_and_click_validate_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks success message and reference no",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDef.user_checks_success_message_and_reference_no()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on demo bank application \"http://demo.rapidtestpro.com/login.php\" in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HooksClass.user_is_on_demo_bank_application_in_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"1234556666\"and \"MavDemo@01\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDef.click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid \"12345\" and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enter_the_valid_and_click_on_validate_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.user_should_navigate_to_Home_Page_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfers option",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDef.user_clicks_the_FundTransfers_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"rowQuery5\" datas",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_enters_the_datas(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfers button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_clicks_the_FundTransfers_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"123456\" and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.user_enter_the_and_click_validate_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks success message and reference no",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDef.user_checks_success_message_and_reference_no()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});