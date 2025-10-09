describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
  });

  it("TC_03_02 - Verify that all 9 history 'Go to move' appears after the board is filled", () => {
    cy.visit("http://localhost:5173/");

    const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8];

    for (let i = 0; i < moves.length; i++) {
      if (i ==0 ) {
        cy.get("#root > div > div:nth-child(1) button").eq(moves[i]).click();

        cy.get("#root > div > div:nth-child(2) button")
          .eq(moves[i])
          .should("contain.text", "Go to game start");

        cy.get("#root > div > div:nth-child(2) button")
          .eq(i+1)
          .should("contain.text", `Go to move #${i+1}`);
      } else {
        cy.get("#root > div > div:nth-child(1) button").eq(moves[i]).click();
        
        cy.get("#root > div > div:nth-child(2) button")
          .eq(i+1)
          .should("contain.text", `Go to move #${i+1}`);
      }
    }
  });
});
