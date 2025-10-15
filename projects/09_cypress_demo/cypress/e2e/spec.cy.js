/// <reference types="cypress" />

describe("template spec", () => {
  beforeEach(() => {
    Cypress.config({
      defaultCommandTimeout: 6000,
      viewportHeight: 700,
    });
  });

  it("Open example.cypress.io page", () => {
    cy.visit("/");

    cy.contains("Swag Labs");
    cy.contains("Swag Labs").should("have.text", "asdfasdf");
  });
});

describe("saucedemo website", () => {
  it(
    "Load login page",
    {
      defaultCommandTimeout: 2000,
      viewportHeight: 1100,
    },
    () => {
      cy.visit("/");

      cy.contains("Swag Labs");
      cy.contains("Swag Labs").should("have.text", "asdfasdf");

      cy.contains("h4", "user");
      cy.contains("div", "user");
      cy.contains("div", "Swag Labs");

      cy.contains("div", "Swag Labs").should("be.visible");
      cy.contains("h4", "Accepted").should("be.visible");

      cy.contains("div", "Swag Labs")
        .should("be.visible")
        .should("have.attr", "class")
        .and("equal", "login_logo");
    }
  );

  it("Positive login with valid data", () => {
    cy.visit("/");
    cy.viewport("iphone-8");
    // cy.get('user');
    // cy.get('user-name');
    cy.get("#user-name");
    cy.get("[id=user-name]");
    cy.get("input[id=user-name]");
    cy.get("[data-test=username]");
    cy.get("input");
    cy.get(".form_input");

    cy.get("[id=user-name]").type("standard_user");
    cy.get("[id=password]").type("secret_sauce");
    cy.get("input[id=login-button]").click();

    // cy.get('span[data-test="title"]').contains('Product').should('be.visible');
    // cy.get('span[data-test="title"]').should('contain','Product').should('be.visible');
    cy.get('span[data-test="title"]')
      .should("be.visible")
      .should("have.text", "Products");

    cy.get('span[data-test="title"]').then(($tag) => {
      // cy.log($tag.text());
      expect($tag.text().trim()).equal("Products");
    });

    cy.get('[data-test="title"]')
      .contains("products", { matchCase: false })
      .should("be.visible");
  });
});
