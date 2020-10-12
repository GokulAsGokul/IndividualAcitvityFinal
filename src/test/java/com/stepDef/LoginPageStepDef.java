package com.stepDef;

import com.base.BaseClass;
import com.pojo.LoginPagePojo;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepDef extends BaseClass {
	LoginPagePojo object = new LoginPagePojo();

	@When("User enter the valid {string} and click on validate button")
	public void user_enter_the_valid_and_click_on_validate_button(String pin) {
		screenshot("PinPage_Before");
		sendKeys(object.getTxtPin(), pin);
		screenshot("PinPage_After");
		btnClick(object.getBtnValidate());
	}

	@When("Click the Login button")
	public void click_the_Login_button() {
		screenshot("LoginPage_After");
		btnClick(object.getBtnLogin());

	}

	@Then("User should verify the login message with {string}")
	public void user_should_verify_the_login_message_with(String password) {
		if (password.equals("MavDemo@02")) {
			String text = getText(object.getErrorMessage());
			String message = "Not valid account number or password or Account is not Active. Please try again or contact to support.";
			assertEquals(text, message);
			screenshot("LoginErrorPage");
		} else {
			System.out.println("Successfully Logged-In");
			getText(object.getPinMessage());
			screenshot("SuccessfullLogin");
		}
	}

	@When("User enter the {string}and {string}")
	public void user_enter_the_and(String accountNumber, String password) {
		screenshot("LoginPage_Before");
		sendKeys(object.getTxtAccountNo(), accountNumber);
		sendKeys(object.getTxtPassword(), password);
	}
}
