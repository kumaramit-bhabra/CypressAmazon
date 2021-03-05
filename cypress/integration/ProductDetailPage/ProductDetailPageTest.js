///<reference types = "Cypress"/>

import ProductDetailPage from "../../pageObjects/ProductDetailPage";
import {Given, When , Then, And} from "cypress-cucumber-preprocessor/steps";


const productDetailPage = new ProductDetailPage();
var prdDesc = "";


Then("Product Detail Page should be displayed",function(){
    productDetailPage.validateTitle(this.prdDesc);
})

And("I select a Size", function(){
    productDetailPage.selectSize();
})

And("I click on Add to Cart Button", function(){
    productDetailPage.addToCart();
})
