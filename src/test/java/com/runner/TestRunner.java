package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {
		"src/test/resources/Features" }, glue = "com.stepDef", monochrome = true, dryRun = false, strict = true, tags = {
				"@test" }, plugin = { "pretty", "html:Reports", "json:Reports\\output.json" })
public class TestRunner {

}
