package com.stepDef;

import com.base.BaseClass;
import com.pojo.ObjectManager;

import cucumber.api.java.en.Then;

public class AccountDetailsStepDef extends BaseClass {
	ObjectManager object = new ObjectManager();

	@Then("User should able to see all the account details")
	public void user_should_able_to_see_all_the_account_details() {
		getText(object.getAccountDetailsPojo().getTxtuserName());
		getText(object.getAccountDetailsPojo().getTextAccountDetails());
		screenshot("AccountDetails");
	}

}
