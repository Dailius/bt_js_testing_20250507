1. Combinator selectors
2. Single page apps (spa). Website vs web applications.
3. React


## 1. Combinator selectors

Cypress each:  
https://docs.cypress.io/api/commands/each

Cypress selectors (including xpath):  
https://www.cypress.io/blog/understanding-selectors-in-testing  


1. Child Selector:  
   `cy.get('#myDiv > p');`  
   Selects only direct `<p>` children of `<div id="myDiv">`

2. Descendant Selector (Space ):  
   `cy.get('#myDiv p');`  
   Selects all `<p>` elements inside `<div id="myDiv">`

3. Adjacent Sibling Selector (+):  
   `cy.get('#myDiv + p');`  
   Selects the first `<p>` that comes immediately after `<div id="myDiv">`

4. General Sibling Selector (~):   
   `cy.get('#myDiv ~ p');`  
   Selects all `<p>` siblings that come after `<div id="myDiv">`

5. Combining Multiple Combinators:  
   `cy.get('#myDiv > ul > li + li');`  
   Selects the second `<li>` inside `<ul>` that is a direct child of #myDiv


## 2. Single page apps (spa). Website vs web applications.

html, css, js 
https://webflow.com/blog/90s-website-design 


Vienas populiariausiu yra React.  
https://react.dev/  

## 3. React

Seniau buvo naudojama programa `create react app`  
https://create-react-app.dev/docs/getting-started/  

Pagrindinis sablonas su kuriuo galime pasileisti `react` yra `Vite`  
https://vite.dev/guide/  

Create react app:  
```bash
    npm create vite .
```

Complete installation steps:  
* Select  * React
* Select JavaScript
* continue selecting `no`

```bash
    # install all libs
    npm i

    # run app
    npm run dev
```


Stop app: CTRL + C 

