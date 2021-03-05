import {Given, When , Then, And} from "cypress-cucumber-preprocessor/steps";
import ShoppingBagPage from "../../pageObjects/ShoppingBagPage";



const shoppingBagPage = new ShoppingBagPage();
//var prdDesc = "";
//var price = "";


Then("Correct Price should be displayed in the shopping bag",function(){
    shoppingBagPage.isCorrectPriceDisplayed(this.prc);
})

And("I click on checkout button",function(){
    shoppingBagPage.clickCheckOutButton();
})