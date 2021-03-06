package stepDefinitions;

import base.CommonAPI;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Point;
import org.openqa.selenium.support.PageFactory;
import pageObjects.HomePage;

public class SearchSteps extends HomePage {
    HomePage objHomePage = PageFactory.initElements(driver, HomePage.class);

    @Given("^I am in Home Page$")
    public void i_am_in_Home_Page(){
        System.out.println("You are in Home Page");
    }

    @When("^Enter product name \"(.*)\" in search box$")

    public void enter_product_name_Laptop_in_search_box(String product){
        objHomePage.enterProductName(product);
    }

    @When("^Click Search Button$")
    public void click_Search_Button() {
        objHomePage.clcikSearchButton();
    }

    @Then("^Laptop items appear$")
    public void laptop_items_appear() {
        objHomePage.userInLaptopPage();
    }
}
