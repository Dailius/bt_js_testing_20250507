describe("TS.01 Login", () => {
  const selectorLoginPage = {
    inputUserName: "[id=user-name]",
    inputPassword: "[id=password]",
    buttonLogin: "input[id=login-button]",
  };

  const selectorHomePage = {
    spanProductsTitle: 'span[data-test="title"]',
  };

  const userLoginData = {
    userName: "standard_user",
    password: "secret_sauce",
  };

  it("TC01.1. Login with valid data", () => {
    cy.visit("/");

    cy.get(selectorLoginPage.inputUserName).type(userLoginData.userName);
    cy.get(selectorLoginPage.inputPassword).type(userLoginData.password);
    cy.get(selectorLoginPage.buttonLogin).click();

    cy.get(selectorHomePage.spanProductsTitle)
      .should("be.visible")
      .should("have.text", "Products");
  });

  it("TC01.2. Login with valid data", () => {
    cy.visit("/");

    cy.inputValue(selectorLoginPage.inputUserName, userLoginData.userName);
    cy.inputValue(selectorLoginPage.inputPassword, userLoginData.password);
    cy.clickOnButton(selectorLoginPage.buttonLogin);

    cy.get(selectorHomePage.spanProductsTitle)
      .should("be.visible")
      .should("have.text", "Products");
  });
});

describe("TS.02 Home page loaded", () => {
  beforeEach(() => {
    // login
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
  });

  it("TC02.1. some name", () => {
    // some test logic
  });
});

describe("TS.03 Item details page loaded", () => {
  beforeEach(() => {
    // login
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
  });

  it("TC03.1. some name", () => {
    // some test logic
  });
});
