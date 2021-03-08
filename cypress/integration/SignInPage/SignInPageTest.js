/// <reference types = "Cypress"/>

import {Given, When , Then, And} from "cypress-cucumber-preprocessor/steps";
import SignInPage from "../../pageObjects/SignInPage";

const signInPage = new SignInPage();


Then("Sign in Page should be displayed", function(){
    signInPage.isSignInPagedisplayed(this.dataFixture);
})

And("I enter the email Id", function(){
    signInPage.enterEmail(this.dataFixture);
})

And("Click on continue button", function(){
    signInPage.clickContinue();
})

Then("I should get the option to enter the password", function(){
    signInPage.isPasswordOptionDisplayed();
})

And("I enter the password and click on Sign in button", function(){
    signInPage.clickSignIn(this.dataFixture);
})


