$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "duration": 38140665373,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter invalid email and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Error message appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 44789603548,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_invalid_email_and_password()"
});
formatter.result({
  "duration": 15288562731,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.error_message_appear()"
});
formatter.result({
  "duration": 37421697,
  "status": "passed"
});
formatter.after({
  "duration": 6745366435,
  "status": "passed"
});
});