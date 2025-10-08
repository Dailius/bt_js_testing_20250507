/// <reference types="cypress" />

describe("Demo html file", () => {
  it("Combinator examples", () => {
    cy.visit("http://127.0.0.1:8086/demo.html");

    cy.log("***");
    cy.log("*** COMBINATOR SELECTORS ***");

    cy.log("*** Child selector '>' ***");

    cy.get('[data-qa="comb_slc"] > p');

    cy.get('[data-qa="comb_slc"] > p').each(($tag, index)=>{
        cy.log(`Paragraph ${index + 1}: ${$tag.text().trim()}`);
        cy.wrap($tag).should('be.visible');
    });

    cy.log("***");
    cy.log("*** Descendant Selector (Space ) ***");

    cy.get('[data-qa="comb_slc"] p');

    cy.log("***");
    cy.log("*** Sibling Selector (+) ***");

    cy.get('[data-qa="sib_slc"] + p');
    cy.get('[data-qa="sib_slc"] + + p');
    cy.get('[data-qa="sib_slc"] + + + div');

    cy.log("***");
    cy.log("*** General Sibling Selector (~) ***");

    cy.get('[data-qa="sib_slc"] ~ p');
    cy.get('[data-qa="comb_slc"] ~ p');

    cy.log("***");
    cy.log("*** Combining Multiple Combinator ***");

    cy.get('#comb_slc_comb > ul > li + li');
  });
});
