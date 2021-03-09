class ProductDetailPage{

    //Associated Web Elements
    titleElm = "title";
    sizeDrpDwnElm = "#native_dropdown_selected_size_name";
    availOptElm ="option[class='dropdownAvailable']";
    addToCartBttnElm = "#add-to-cart-button";
    priceElm = "#priceblock_ourprice";
    prdPrice = 0;
    

    validateTitle($title){
        cy.log("inside validate title ## " + $title);
        var actualPageTitle = "";
        
        cy.get(this.titleElm).then(function($pageTitle){
        actualPageTitle = $pageTitle.text();
        actualPageTitle = actualPageTitle.substring(0,actualPageTitle.indexOf(":"));
        //expect(actualPageTitle).to.contain($title);
        })
    }

    selectSize()
    {
        var drpDwnElm = this.sizeDrpDwnElm;
        var option = this.availOptElm;
        var prdPrice = this.priceElm;
        
        cy.get(this.sizeDrpDwnElm).find(this.availOptElm).each(function($el,index,$list){
                        
            if($list.length > 3)
            {
                cy.get(drpDwnElm).find(option).eq('2').then(function($drpDwnValue)
                {
                    cy.get(drpDwnElm).select($drpDwnValue.text().trim());
                    cy.wait(3000);
                    cy.get(prdPrice).as('prc');
                })
            return false; 
            }
            
        });
    }

    addToCart()
    {
        //cy.get(this.priceElm).as('prc');
        cy.wait(3000);
        cy.get(this.addToCartBttnElm).click();
        
    }

    
}

export default ProductDetailPage