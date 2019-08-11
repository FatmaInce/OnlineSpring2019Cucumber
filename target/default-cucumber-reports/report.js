$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\fleet\\vehicles\\vehicles.feature");
formatter.feature({
  "name": "Vehicles",
  "description": "  As user I want to see list of all vehicles",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@vehicles"
    }
  ]
});
formatter.scenario({
  "name": "Login as a driver and navigate to the Vehicles",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@vehicles"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"driver\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"Cars\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Cars]\u003e but was:\u003c[Quick Launchpad]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.vytrack.step_definitions.LoginStepDefinitions.user_verifies_that_page_name_is_displayed(LoginStepDefinitions.java:31)\r\n\tat ✽.user verifies that \"Cars\" page name is displayed(src\\test\\resources\\features\\fleet\\vehicles\\vehicles.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user verifies that default page number is 1",
  "keyword": "And "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_verifies_that_default_page_number_is(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});