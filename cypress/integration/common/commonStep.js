import HomePage from "../../pageObjects/HomePage";
import ProductListingPage from "../../pageObjects/ProductListingPage";
import ProductDetailPage from "../../pageObjects/ProductDetailPage";
import {Given, When , Then, And} from "cypress-cucumber-preprocessor/steps";
import ShoppingBagPage from "../../pageObjects/ShoppingBagPage";

const homePage = new HomePage();
const productListingPage = new ProductListingPage();
const productDetailPage = new ProductDetailPage();
const shoppingBagPage = new ShoppingBagPage();

beforeEach(function(){

    cy.fixture('example.json').as('dataFixture');
})

Given("User is on the Amazon homepage",function(){
    homePage.isHomePageDisplayed(this.dataFixture);
})

When("Search is performed with keyword {string}",function($string){
    this.searchKeyword = $string;
    homePage.enterSearchByKeyword($string);
})

Then("Search suggestion box result should have {string}",function($string){
    homePage.isSearchSuggestionHavingKeyword($string);
})

And("I select one of the options and press Search button",function(){
    homePage.selectOptionFromSuggestion();
})

And("I select one of the product from listing page by {string}",function($description){
    this.prdDesc = productListingPage.selectProductByDescription($description);
})

Then("Product Detail Page should be displayed",function(){
    productDetailPage.validateTitle(this.prdDesc);
})

And("I select a Size", function(){
    productDetailPage.selectSize();
})

And("I click on Add to Cart Button", function(){
   productDetailPage.addToCart();
})

Then("Correct Price should be displayed in the shopping bag",function(){
    shoppingBagPage.isCorrectPriceDisplayed(this.prc);
})

And("I click on checkout button",function(){
    shoppingBagPage.clickCheckOutButton();
})