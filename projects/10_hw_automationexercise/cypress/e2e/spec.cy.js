/// <reference types="cypress" />
import "cypress-real-events/support";

describe("template spec", () => {
  // let userDtls = null;
  const userDtls = {
    name: "Rasa",
    firstName: "Rasa",
    lastName: "Rasyte",
    email: "dmoNew1321@email.com",
    password: "lakjsdf1321",
    day: "14",
    month: 6,
    year: "2000",
    company: "Some Company name",
    address: "Rasu g. 34",
    country: "Canada",
    state: "British Columbia",
    city: "Vancouver",
    zip: "3654",
  };

  // beforeEach(() => {
  //   // some additional code lines to read date from file
  //   // userDtls = {}
  // });

  it("1. Logs in with valid details", () => {
    // 1. ARRANGE
    // some variables

    // 2. ACT
    // 1-2 steps
    cy.visit("http://automationexercise.com");
    cy.get("a").contains("Signup / Login").click();
    cy.get('form[action="/login"]')
      .find('input[type="email"]')
      .type(userDtls.email);
    cy.get('form[action="/login"]')
      .find('input[type="password"]')
      .type(userDtls.password);
    cy.get('button[data-qa="login-button"]').click();

    // 3. ASSERT
    cy.get('a[href="/delete_account"]').click();
    // with assert check user logged in.

    cy.get("h2").find("b").contains("Account Deleted!").should("be.visible");
  });

  it("Test Case 12: Add Products in Cart", () => {
    // 1-2 steps
    cy.visit("http://automationexercise.com");

    //3. Verify that home page is visible successfully
    cy.url().should("eq", "https://automationexercise.com/");
    cy.get('a[style="color: orange;"]').should("contain", "Home");

    //4. Click 'Products' button
    cy.contains('a[href="/products"]', "Products").click();

    //5. Hover over first product and click 'Add to cart'
    // cy.get('.product-image-wrapper').eq(0);
    // cy.get('.product-image-wrapper').first();
    // cy.get('.product-image-wrapper').last();

    cy.get(".product-image-wrapper")
      .first()
      .trigger("mouseover", { force: true })
      .find('a[data-product-id="1"]')
      .eq(1)
      .click({ force: true });

    // 6. Click 'Continue Shopping' button
    cy.get('button[data-dismiss="modal"]').click();

    // 7. Hover over second product and click 'Add to cart'
    // cy.get('a[data-product-id="2"]').eq(1).click({ force: true });

    cy.get(".product-image-wrapper").eq(1).realHover();

    cy.get(".product-image-wrapper")
      .eq(1)
      .trigger("mouseover")
      .within(() => {
        cy.contains("Add to cart").click();
      });

    // 8. Click 'View Cart' button
    cy.contains("View Cart").click();

    // 9 Verify both products are added to Cart
    // cy.contains('Blue Top').should('be.visible');
    // cy.contains('Men Tshirt').should('be.visible');

    // 10. Verify their prices, quantity and total price
    cy.get('tr[id="product-1"]').within(() => {
      cy.get(".cart_description a").should("have.text", "Blue Top");
      cy.get(".cart_quantity > .disabled").should("have.text", "1");
      cy.get(".cart_price > p").should("have.text", "Rs. 500");
      cy.get(".cart_total > p").should("have.text", "Rs. 500");
    });

    cy.get('tr[id="product-2"]').within(() => {
      cy.get(".cart_description a").should("have.text", "Men Tshirt");
      cy.get(".cart_quantity > .disabled").should("have.text", "1");
      cy.get(".cart_price > p").should("have.text", "Rs. 400");
      cy.get(".cart_total > p").should("have.text", "Rs. 400");
    });
  });

  describe("TS.6 Delete", () => {
    describe("Positive", () => {
      beforeEach(()=>{
        // call function that creates new account

      });

      it("TC.6.1.Delete account",()=>{

      });

      afterEach(()=>{

      });

    });
    describe("Negative", () => {
      beforeEach(()=>{});
      afterEach(()=>{});
    });
  });

  describe("TS.2 Login", () => {

    describe("Positive", () => {
      let newUser;

      beforeEach(()=>{
        // solution to read external testing data
        let newUser = {userName: "asdfa", email: "demo@demo.com"}
        // call function that creates new account (newUser)
      });

      it("TC.6.1.Login",()=>{
        //1. Arrange
        //2. Act
        //3. Assert
      });

      it("TC.6.2.Login with min name",()=>{
        //1. Arrange
        let newUser = {userName: "asdfa", email: "demo@demo.com"}

        //2. Act
        //3. Assert
      });

      it("TC.6.2.Login with max name",()=>{
        //1. Arrange
        let newUser = {userName: "asdfa", email: "demo@demo.com"}
        
        //2. Act
        //3. Assert
      });

      afterEach(()=>{
        // call function that deletes account (newUser)
      });

    });
    describe("Negative", () => {
      beforeEach(()=>{});
      afterEach(()=>{});
    });
  });
});
