$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FormSubmitWithoutExamples.feature");
formatter.feature({
  "line": 1,
  "name": "input form demo automation",
  "description": "",
  "id": "input-form-demo-automation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "input form data automation",
  "description": "",
  "id": "input-form-demo-automation;input-form-data-automation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is in selenium easy homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the pageis selenium easy",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on demo website",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Title of the page is best demo website",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on input forms",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on input form submit",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters details",
  "rows": [
    {
      "cells": [
        "sujith",
        "reddy",
        "sujith.talamanchi@gmail.com",
        "868624972",
        "marathahalli",
        "banglore",
        "Georgia",
        "500038",
        "www.google.com",
        "input form testing"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "InputForm.user_is_in_selenium_easy_homepage()"
});
formatter.result({
  "duration": 13260476840,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.title_of_the_pageis_selenium_easy()"
});
formatter.result({
  "duration": 54259442,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.click_on_demo_website()"
});
formatter.result({
  "duration": 2132894610,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.title_of_the_page_is_best_demo_website()"
});
formatter.result({
  "duration": 13603651,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.click_on_input_forms()"
});
formatter.result({
  "duration": 177592495,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.click_on_input_form_submit()"
});
formatter.result({
  "duration": 675615823,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.user_enters_details_and_click_on_send(DataTable)"
});
formatter.result({
  "duration": 3143495218,
  "status": "passed"
});
formatter.match({
  "location": "InputForm.close_the_browser()"
});
formatter.result({
  "duration": 1107128453,
  "status": "passed"
});
});