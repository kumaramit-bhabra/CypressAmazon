class DeliveryAddressPage{

    
    priceElm = ".a-color-price";
    deliveryAddBttnElm = ".a-declarative.a-button-text ";
    continueBttnElm = ".a-button-text"

    isCorrectPriceDisplayed($price)
    {
        let prcPrdDetPage;
        let prcShopBag;

        cy.get(this.deliveryAddBttnElm).contains("Deliver to this address").click();
        
        cy.wait(4000);
        
        cy.get(this.priceElm).then(function($shopBagPrc){
            prcShopBag = $shopBagPrc.text();
        });

        cy.wrap($price).then(function($priceExt){
            prcPrdDetPage = $priceExt.text();
            expect(prcShopBag.trim()).to.be.equal(prcPrdDetPage);
            });
        
        cy.get(this.continueBttnElm).contains("Continue").eq(0).click();
    }

}
export default DeliveryAddressPage;