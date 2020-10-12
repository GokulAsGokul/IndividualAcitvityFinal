package com.stepDef;

import com.base.BaseClass;
import com.base.ExcelReader;
import com.codoid.products.exception.FilloException;
import com.pojo.FundTransferPojo;

import cucumber.api.java.en.Then;

public class FundTransferStepDef extends BaseClass {
	FundTransferPojo object = new FundTransferPojo();
	ExcelReader reader = new ExcelReader();

	@Then("User enters {string} and click FundTransfers button")
	public void user_enters_and_click_FundTransfers_button(String bank) {
		screenshot("InvalidFundTransfer_Before");
		sendKeys(object.getTxtReceiverBankName(), bank);
		screenshot("InvalidFundTransfer_After");
		btnClick(object.getBtnFundTransfer());
	}

	@Then("User checks success message and reference no")
	public void user_checks_success_message_and_reference_no() throws Exception {
		String text = getText(object.getSuccessMessage());
		String message = "International Transaction Successful";
		assertEquals(text, message);
		getText(object.getTransactionNo());
		screenshot("ValidFundTransfer");
	}

	@Then("User see the warning message when mandatory field is missing")
	public void user_see_the_warning_message_when_mandatory_field_is_missing() {
		getText(object.getErrorMessage1());
		getText(object.getErrorMessage2());
		getText(object.getErrorMessage3());
		getText(object.getErrorMessage4());
		getText(object.getErrorMessage5());
		getText(object.getErrorMessage6());
		getText(object.getErrorMessage7());
		screenshot("InvalidFundTransfer");
	}

	@Then("User enters the {string} datas")
	public void user_enters_the_datas(String string) throws FilloException {
		screenshot("FundTransfer_Before");
		String receiverBankName = reader.getTestValue("ReceiverBankName", string);
		String receiverName = reader.getTestValue("ReceiverName", string);
		String receiverAccountNumber = reader.getTestValue("ReceiverAccountNumber", string);
		String routingNumber = reader.getTestValue("RoutingNumber", string);
		String amount = reader.getTestValue("Amount", string);
		String transferType = reader.getTestValue("TransferType", string);
		String date = reader.getTestValue("Date", string);
		String description = reader.getTestValue("Description", string);
		sendKeys(object.getTxtReceiverBankName(), receiverBankName);
		sendKeys(object.getTxtReceiverName(), receiverName);
		sendKeys(object.getTxtReceiverAccountNo(), receiverAccountNumber);
		sendKeys(object.getTxtRoutingNo(), routingNumber);
		sendKeys(object.getTxtAmount(), amount);
		selectValue(object.getBtnTransferType(), transferType);
		sendKeys(object.getTxtDate(), date);
		sendKeys(object.getTxtDescription(), description);
	}

	@Then("User enter the {string} and click validate button")
	public void user_enter_the_and_click_validate_button(String code) {
		screenshot("AuthCodePage_Before");
		sendKeys(object.getTxtAuthCode(), code);
		screenshot("AuthCodePage_After");
		btnClick(object.getBtnValidate());
	}

	@Then("User clicks the FundTransfers button")
	public void user_clicks_the_FundTransfers_button() {
		screenshot("FundTransfer_After");
		btnClick(object.getBtnFundTransfer());
	}

}
