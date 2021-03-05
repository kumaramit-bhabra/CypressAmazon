
class HomePage{
     
    //HomePage Web Elements
    acceptCookieBttnElm = "#sp-cc-accept";
    homePageTitleElm = "title";
    searchTxtElm = "#twotabsearchtextbox";
    searchSubBttnElm = "#nav-search-submit-button"
    searchResultSuggestElm = "#suggestions div";
    
    isHomePageDisplayed($daFixture)
    {
    cy.visit("https://www.amazon.co.uk/");
    cy.get(this.acceptCookieBttnElm).click();
    cy.get(this.homePageTitleElm).then(function($title)
        {
        expect($title.text()).equal($daFixture.landingPageTitle);
        })
    }

    enterSearchByKeyword($keyword)
    {
        cy.get(this.searchTxtElm).type($keyword);
        
    }

    isSearchSuggestionHavingKeyword($keyword)
    {
        cy.get(this.searchResultSuggestElm).each(function($el,index,$list){
            var text = $el.text();
                if (index != 1)
                {
                 expect(text).to.contain( $keyword.toLowerCase());
                }
            });
    }

    selectOptionFromSuggestion()
    {
        var numberOfSugg = 0;
        var suggElm = "#suggestions div";
        var searchBttnElm = "#nav-search-submit-button";

        cy.get(this.searchResultSuggestElm).then(function($searchSugg){
        numberOfSugg = $searchSugg.length;

        if(numberOfSugg > 0)
            {
                cy.get(suggElm).eq('2');
                cy.get(searchBttnElm).click();
            }
        })
    }
}

export default HomePage;