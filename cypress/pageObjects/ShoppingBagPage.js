class ShoppingBagPage{

    //Web elements associated with the Page
    proceedToChkBttElm = "#hlb-ptc-btn-native";
    bagPriceElm = ".a-color-price.hlb-price.a-inline-block.a-text-bold";

    isCorrectPriceDisplayed($price)
    {
        let prcPrdDetPage;
        let prcShopBag
        
        cy.get(this.bagPriceElm).eq(0).then(function($shopBagPrc){
            prcShopBag = $shopBagPrc.text();
        });
    
        cy.wrap($price).then(function($priceExt){
        prcPrdDetPage = $priceExt.text();
        cy.log(prcPrdDetPage);

        expect(prcShopBag).to.be.equal(prcPrdDetPage);
        });

        
    }

    clickCheckOutButton()
    {
        cy.get(this.proceedToChkBttElm).click();
    }

}

export default ShoppingBagPage;