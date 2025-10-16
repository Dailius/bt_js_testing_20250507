/// <reference types="cypress" />

class HomePage {
  selector = {
    spanProductsTitle: 'span[data-test="title"]',
  };

  element = {
    getTextProductsTitle: () => cy.get(this.selector.spanProductsTitle),
  };
}

export default new HomePage();
