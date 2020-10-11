package com.stepDef;

import com.base.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class HooksClass extends BaseClass {
	@Before
	public void beforeExecution(Scenario scenario) {
		System.out.println("Scenario Started Successfully....");
	}

	@Given("User is on demo bank application {string} in browser")
	public void user_is_on_demo_bank_application_in_browser(String url) {
		launchBrowser();
		loadUrl(url);
		driver.manage().deleteAllCookies();
	}

	@After
	public void afterExecution() {
		closeBrowser();
		System.out.println("Scenario Completed and Browser closed....");
	}
}
