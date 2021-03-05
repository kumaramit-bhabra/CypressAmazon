/// <reference types = "Cypress"/>

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"; 
import HomePage from "../../pageObjects/HomePage";

const homePage = new HomePage();

/*
Given("User is on the Amazon homepage",function(){
    homePage.isHomePageDisplayed(this.dataFixture);
})

When("Search is performed with keyword {string}",function($string){
    homePage.enterSearchByKeyword($string);
})

Then("Search suggestion box result should have {string}",function($string){
    homePage.isSearchSuggestionHavingKeyword($string);
})

And("I select one of the options and press Search button",function(){
    homePage.selectOptionFromSuggestion();
})*/