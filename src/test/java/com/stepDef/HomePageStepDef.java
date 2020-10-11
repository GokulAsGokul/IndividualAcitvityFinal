package com.stepDef;

import com.base.BaseClass;
import com.pojo.ObjectManager;

import cucumber.api.java.en.Then;

public class HomePageStepDef extends BaseClass {
	ObjectManager object = new ObjectManager();

	@Then("User should navigate to Home Page successfully")
	public void user_should_navigate_to_Home_Page_successfully() {
		String text = getText(object.getHomePagePojo().getName());
		String name = "Welcome, TOUSIF KHAN";
		assertEquals(text, name);
		screenshot("HomePage");
	}

	@Then("User clicks the FundTransfers option")
	public void user_clicks_the_FundTransfers_option() {
		btnClick(object.getHomePagePojo().getBtnFundTransfer());
	}

	@Then("User checks Amount and transactionNo after transaction in account summary")
	public void user_checks_Amount_and_transactionNo_after_transaction_in_account_summary() {
		btnClick(object.getHomePagePojo().getBtnAccountSummary());
		getText(object.getHomePagePojo().getBalance());
		getText(object.getHomePagePojo().getTransactionNo());
		screenshot("AccountSummary");
	}

	@Then("User click the account details button")
	public void user_click_the_account_details_button() {
		btnClick(object.getHomePagePojo().getBtnAccountDetails());
	}
}
