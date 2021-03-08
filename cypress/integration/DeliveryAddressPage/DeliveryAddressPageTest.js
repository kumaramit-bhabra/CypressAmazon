import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import DeliveryAddressPage from "../../pageObjects/DeliveryAddressPage";

const deliveryAddressPage = new DeliveryAddressPage();

Then("Correct Price should be displayed",function(){
    deliveryAddressPage.isCorrectPriceDisplayed(this.prc);
})