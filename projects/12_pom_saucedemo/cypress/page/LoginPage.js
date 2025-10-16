/// <reference types="cypress" />

class LoginPage {
  selector = {
    inputUserName: "[id=user-name]",
    inputPassword: "[id=password]",
    buttonLogin: "input[id=login-button]",
  };

  element = {
    getInputUserName: () => cy.get(this.selector.inputUserName),
    getInputPassword: () => cy.get(this.selector.inputPassword),
    getButtonLogin: () => cy.get(this.selector.buttonLogin),
  };

  visit(){
    cy.visit("/");
  }

  enterUserName(value) {
    this.element.getInputUserName().clear().type(value);
  }

  enterPassword(value) {
    this.element.getInputPassword().clear().type(value);
  }

  clickOnButtonLogin() {
    this.element.getButtonLogin().click();
  }

  login(userName, password){
    this.enterUserName(userName);
    this.enterPassword(password);
    this.clickOnButtonLogin();
  }
}

export default new LoginPage();
