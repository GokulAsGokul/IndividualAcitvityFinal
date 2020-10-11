package com.stepDef;

import com.base.BaseClass;
import com.base.ExcelReader;
import com.codoid.products.exception.FilloException;
import com.pojo.ObjectManager;

import cucumber.api.java.en.Then;

public class FundTransferStepDef extends BaseClass {
	ObjectManager object = new ObjectManager();
	ExcelReader reader = new ExcelReader();

	@Then("User checks success message and reference no")
	public void user_checks_success_message_and_reference_no() throws Exception {
		String text = getText(object.getFundTransferPojo().getSuccessMessage());
		String message = "International Transaction Successful";
		assertEquals(text, message);
		getText(object.getFundTransferPojo().getTransactionNo());
		screenshot("ValidFundTransfer");
	}

	@Then("User enter the {string} and click validate button")
	public void user_enter_the_and_click_validate_button(String code) {
		screenshot("AuthCodePage_Before");
		sendKeys(object.getFundTransferPojo().getTxtAuthCode(), code);
		screenshot("AuthCodePage_After");
		btnClick(object.getFundTransferPojo().getBtnValidate());
	}

	@Then("User enters {string} and click FundTransfers button")
	public void user_enters_and_click_FundTransfers_button(String bank) {
		screenshot("InvalidFundTransfer_Before");
		sendKeys(object.getFundTransferPojo().getTxtReceiverBankName(), bank);
		screenshot("InvalidFundTransfer_After");
		btnClick(object.getFundTransferPojo().getBtnFundTransfer());
	}

	@Then("User see the warning message when mandatory field is missing")
	public void user_see_the_warning_message_when_mandatory_field_is_missing() {
		getText(object.getFundTransferPojo().getErrorMessage1());
		getText(object.getFundTransferPojo().getErrorMessage2());
		getText(object.getFundTransferPojo().getErrorMessage3());
		getText(object.getFundTransferPojo().getErrorMessage4());
		getText(object.getFundTransferPojo().getErrorMessage5());
		getText(object.getFundTransferPojo().getErrorMessage6());
		getText(object.getFundTransferPojo().getErrorMessage7());
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
		sendKeys(object.getFundTransferPojo().getTxtReceiverBankName(), receiverBankName);
		sendKeys(object.getFundTransferPojo().getTxtReceiverName(), receiverName);
		sendKeys(object.getFundTransferPojo().getTxtReceiverAccountNo(), receiverAccountNumber);
		sendKeys(object.getFundTransferPojo().getTxtRoutingNo(), routingNumber);
		sendKeys(object.getFundTransferPojo().getTxtAmount(), amount);
		selectValue(object.getFundTransferPojo().getBtnTransferType(), transferType);
		sendKeys(object.getFundTransferPojo().getTxtDate(), date);
		sendKeys(object.getFundTransferPojo().getTxtDescription(), description);
	}

	@Then("User clicks the FundTransfers button")
	public void user_clicks_the_FundTransfers_button() {
		screenshot("FundTransfer_After");
		btnClick(object.getFundTransferPojo().getBtnFundTransfer());
	}

}
