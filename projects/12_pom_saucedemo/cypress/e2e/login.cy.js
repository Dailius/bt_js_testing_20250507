/// <reference types="cypress" />
import LoginPage from "../page/LoginPage";
import HomePage from "../page/HomePage";

describe("TS.01 Login", () => {
  const userLoginData = {
    userName: "standard_user",
    password: "secret_sauce",
  };

  beforeEach(() => {
    LoginPage.visit()
  });

  it("TC01.1. Login with valid data", () => {
    LoginPage.enterUserName(userLoginData.userName);
    LoginPage.enterPassword(userLoginData.password);
    LoginPage.clickOnButtonLogin();

    HomePage.element.getTextProductsTitle()
      .should("be.visible")
      .should("have.text", "Products");
  });
});
