import { expect } from "chai";

class ProductListingPage{

    //Web elements associated with the Product Listing Page
    prdListDescElm = ".a-size-base-plus.a-color-base.a-text-normal";
    prdListPriceElm = ".a-price";
    departLiElm = "#departments li";
    searchResultElm = ".a-section.a-spacing-small.a-spacing-top-small";
    prdPriceElm = ".a-size-mini.a-link-normal.a-text-normal";
    prdDesc = "";

    validatePageLayout($searchKeyword)
    {
        cy.get(this.departLiElm).then(function($deptList){
            expect($deptList.length).to.be.greaterThan(0);

        });

        cy.get(this.searchResultElm).eq(0).then(function($searchTxt)
        {
            expect($searchTxt.text().substring(0,$searchTxt.text().indexOf('-'))*1).to.be.greaterThan(0);
        })
    }

    selectProductByDescription($description)
    {   
        var prdDescElm = this.prdListDescElm;
        
        cy.get(this.prdListDescElm).contains($description).then(function($desc){
            this.prdDesc = $desc.text();       
        })
    
        cy.get(this.prdListDescElm).each(function($el,index,$list){
            
            if($list.length > 10)
            {
                cy.get(prdDescElm).contains($description).click(); 
                return false;
            }
        })
        
        return this.prdDesc;
        
    }

    selectProductByPrice()
    {
        var prdPrcElm = this.prdListPriceElm;
        cy.get(this.prdListPriceElm).each(function($el,index,$list){
            if($list.length > 40)
            {
                cy.get(prdPrcElm).eq('37').click(); 
                return false;
            }
        })
    }

}

export default ProductListingPage;