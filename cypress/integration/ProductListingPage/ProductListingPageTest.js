/// <reference types = "Cypress"/>

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"; 
import ProductListingPage from "../../pageObjects/ProductListingPage"


const productListingPage = new ProductListingPage();
var searchKeyword ;

And("Correct layout should be displayed for Product Listing Page",function(){
    productListingPage.validatePageLayout(this.searchKeyword);
})

And("I select one of the product from listing page by {string}",function($description){
    productListingPage.selectProductByDescription($description);
})

And("I select one of the product from listing page by price",function(){
    productListingPage.selectProductByPrice();
})
