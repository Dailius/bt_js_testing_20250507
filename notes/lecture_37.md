1. Repeat and check homework
2. Element query
3. Real Hover


## 2. Element query
```javascript
    cy.get('.product-image-wrapper').eq(0);
    cy.get('.product-image-wrapper').eq(1);
    cy.get('.product-image-wrapper').first();
    cy.get('.product-image-wrapper').last();
```

## 3. Real Hover
```bash
npm i cypress-real-events
```

```javascript
import "cypress-real-events/support";

// hover animation
cy.get(".product-image-wrapper").eq(1).realHover();

cy.get(".product-image-wrapper")
    .eq(1)
    .trigger("mouseover")
    .within(() => {
    cy.contains("Add to cart").click();
    });
```
