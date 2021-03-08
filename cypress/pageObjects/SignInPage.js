class SignInPage{

    // Web elements associated with Sign In Page
    signInEmailElm = "#ap_email";
    titleElm = "title";
    continueBttnElm = "#continue";
    passwordTextElm = "#ap_password";
    signInSubmitBttnElm = "#signInSubmit";
    textAsPasswordElm = ".a-form-label";

    

    isSignInPagedisplayed($daFixture)
    {
        let actPageTitle;
        cy.get(this.titleElm).then(function($titleText){
            actPageTitle = $titleText.text();
            expect(actPageTitle).to.be.equals($daFixture.signInPageTitle);
        })
    }

    enterEmail($fixture)
    {
        cy.get(this.signInEmailElm).type($fixture.signInUN);
    }

    clickContinue()
    {
        cy.get(this.continueBttnElm).click();
    }

    isPasswordOptionDisplayed()
    {
        cy.get(this.textAsPasswordElm).contains("Password");
    }

    clickSignIn($fixture)
    {
        cy.get(this.passwordTextElm).type($fixture.password);
        cy.get(this.signInSubmitBttnElm).click();
        
    } 

}

export default SignInPage