package stepDefinitions;


import java.io.IOException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import TestBase.Base;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InputForm extends Base {
	
	
	@Given("^User is in selenium easy homepage$")
	public void user_is_in_selenium_easy_homepage() throws IOException {
		
		loadPropertiesFile();
		launchBrowser();

		driver.get(prop.getProperty("url"));
		driver.manage().window().maximize();
		
	}

	
	@When("^Title of the pageis selenium easy$")
	public void title_of_the_pageis_selenium_easy() {
		
		String title= driver.getTitle();
		System.out.println(title);
	   }

	@Then("^click on demo website$")
	public void click_on_demo_website()  {
		
		driver.findElement(By.xpath("//*[text()='Demo Website!']")).click();
		
	    
	}

	@Then("^Title of the page is best demo website$")
	public void title_of_the_page_is_best_demo_website() {
		String title= driver.getTitle();
		System.out.println(title);
		
	    
	}

	@Then("^click on input forms$")
	public void click_on_input_forms()  {
		driver.findElement(By.xpath("(//a[@class='dropdown-toggle'])[1]")).click();
	    
	}

	@Then("^click on input form submit$")
	public void click_on_input_form_submit()  {
		driver.findElement(By.xpath("//*[text()='Input Form Submit']")).click();
	    
	}

	@Then("^user enters details$")
	public void user_enters_details_and_click_on_send(DataTable inputform)  {
	List<List<String>> data=inputform.raw();
		
		driver.findElement(By.name("first_name")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("last_name")).sendKeys(data.get(0).get(1));
		driver.findElement(By.name("email")).sendKeys(data.get(0).get(2));
		driver.findElement(By.name("phone")).sendKeys(data.get(0).get(3));
		driver.findElement(By.name("address")).sendKeys(data.get(0).get(4));
		driver.findElement(By.name("city")).sendKeys(data.get(0).get(5));
		
		Select s= new Select(driver.findElement(By.name("state")));
		s.selectByVisibleText(data.get(0).get(6));
		driver.findElement(By.name("zip")).sendKeys(data.get(0).get(7));
		driver.findElement(By.name("website")).sendKeys(data.get(0).get(8));
		driver.findElement(By.xpath("(//*[@name='hosting'])[1]")).click();
		driver.findElement(By.name("comment")).sendKeys(data.get(0).get(9));
		
		driver.findElement(By.xpath("//*[@type='submit']")).click();
	  
	}
	
	@Then("^close the browser$")
	public void close_the_browser()
	{
		driver.quit();
	}




}
