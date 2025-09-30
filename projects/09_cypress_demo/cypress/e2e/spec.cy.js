/// <reference types="cypress" />

describe("template spec", () => {
  it("Open example.cypress.io page", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("saucedemo website", () => {
  it("Load login page", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.contains("Swag Labs");
    cy.contains("h4", "user");
    cy.contains("div", "user");
    cy.contains("div", "Swag Labs");

    cy.contains("div", "Swag Labs").should("be.visible");
    cy.contains("h4", "Accepted").should("be.visible");

    cy.contains("div", "Swag Labs")
      .should("be.visible")
      .should("have.attr", "class")
      .and("equal", "login_logo");
  });
});
