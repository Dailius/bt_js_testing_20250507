1. Repeat and check homework
2. Intro to CI/CD
3. Virtual machines
4. Cypress run headless

## 1. Repeat and check homework

TS-1: Page load and initial state. This scenario checks that the game starts correctly when the page first loads.

TS-2: Game play.This scenario verifies the main gameplay logic — turns, moves, and basic rules.

TS-3: Winning and draw conditions.This scenario tests the end-game logic — detecting wins and draws.

TS-4: Time travel.This scenario ensures the game can reset to its initial state.

TS-5: General requirements.These are general quality and compatibility checks.



## 2. Intro to CI/CD

Continuos Integration / Continuos Delivery

![](/pictures/cicd.png)


## 3. Virtual machines
![](/pictures/virtualisation.png)  


Cloud providers: google cloud, Azure, AWS, Hostinger

![](/pictures/saas.png)  

* IaaS - Infrastructure as a Service  
* PaaS - Platform as a Service  
* SaaS - Software as a Service 


## 4. Cypress run headless

https://docs.cypress.io/app/references/command-line  
https://docs.cypress.io/app/references/launching-browsers    

Scripts: 
```bash
"cy:o": "cypress open",
"cy:r": "cypress run",
"cy:r:ch": "cypress run --browser chrome",
"cy:r:ch_spec": "cypress run --browser chrome -- --spec  cypress/e2e/spec.cy.js"
```
