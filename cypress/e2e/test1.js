/// <reference types="Cypress" />

describe('Booking.com test', () => {


    it('login booking', () => {
        cy.visit("https://www.booking.com/")
        
        
    });

    it('login arabbank', () => {       
        cy.visit("https://www.arabbank.com/")
        
    });

    it('bayt login', () => {
        cy.visit("https://www.bayt.com/ar/jordan/")
        
    });

    
    it('linkedin login', () => {
        cy.visit("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin")
        
    });

    it('smartby login', () => {
        cy.visit("https://smartbuy-me.com/smartbuystore/ar")
    });



    it('swaglap login', () => {
        cy.visit("https://www.saucedemo.com")
    });

  
});