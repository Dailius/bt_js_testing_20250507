1. Repeat and check homework
2. Test plan
3. Checklist
4. Smoke testing

## 1. Repeat and check homework

#### 1st option:

TS01 Navigation menu
    TC 1.1. From Menu navigate to Cart
    TC 1.2. From Menu navigate to GitHub
    TC 1.3. From Cart navigate to Menu
    TC 1.4. From Cart navigate to GitHub
    TC 1.5. From GitHub navigate to Menu
    TC 1.6. From GitHub navigate to Cart

TS02 Menu page
    TC_2.1. Add one coffee
    TC_2.2. Add nine coffees
    TC_2.3. Add one coffee by clicking 'Yes' from right lick window
    TC_2.4. Refuse one coffee by clicking 'No' from right lick window
    TC_2.5. Menu page UI/UX
    ...

TS03 Total hover
    TC_3.1. Add one coffee
    TC_3.2. Remove one coffee
    TC_3.3. Negative increase coffee with discount
    ...

TS04 Discount dialog window
    TC_4.1. Choose coffee with discount
    TC_4.1. Refuse coffee with discount
    TC_4.1. Discount window UI/UX
        1. grammar
        2. font
        3. colors
        4. line up
        5. visible on top
        6. Not selectable outside

TS05 Cart page
    TC_5.1. Add one coffee
    TC_5.2. Remove one coffee
    TC_5.3. Negative increase coffee with discount
    ...

TS06 Payment window
    TC_6.1. Positive

TS07 GitHub window
    TC_4.1. Discount window UI/UX
        1. grammar
        2. font
        3. colors
        4. line up
        5. links

TS08 Storage data

#### 2st option:

##### TS01 Navigation menu
    TC 1.1. From Menu navigate to Cart
    TC 1.2. From Menu navigate to GitHub
    TC 1.3. From Cart navigate to Menu
    TC 1.4. From Cart navigate to GitHub
    TC 1.5. From GitHub navigate to Menu
    TC 1.6. From GitHub navigate to Cart

##### 1.Menu
    TS02 Menu page
        TC_2.1. Add one coffee
        TC_2.2. Add nine coffees
        TC_2.3. Add one coffee by clicking 'Yes' from right lick window
        TC_2.4. Refuse one coffee by clicking 'No' from right lick window
        TC_2.5. Menu page UI/UX
        ...

    TS03 Total hover
        TC_3.1. Add one coffee
        TC_3.2. Remove one coffee
        TC_3.3. Negative increase coffee with discount
        ...

    TS04 Discount dialog window
        TC_4.1. Choose coffee with discount
        TC_4.1. Refuse coffee with discount
        TC_4.1. Discount window UI/UX
            1. grammar
            2. font
            3. colors
            4. line up
            5. visible on top
            6. Not selectable outside

##### 2.Cart
    TS05 Cart page
        TC_5.1. Add one coffee
        TC_5.2. Remove one coffee
        TC_5.3. Negative increase coffee with discount
        ...

    TS06 Payment window
        TC_6.1. Positive

##### 3.GitHub
    TS07 GitHub window
        TC_4.1. Discount window UI/UX
            1. grammar
            2. font
            3. colors
            4. line up
            5. links

##### TS08 Storage data



## 2. Test plan

### Environment
### Teams
### Requirements
### Scope and out of scope
### Severities
### Test scenarios
### Exit criteria
### Mitigation
### etc. 

[TP templates strongqa](https://strongqa.com/qa-portal/testing-docs-templates/test-plan)  
[TP templates aws pdf](https://strongqa-production-assets.s3.amazonaws.com/uploads/document/doc/61/test-plan-template-05.pdf)  
[TP template qatestlab](https://qatestlab.com/assets/Uploads/QATestLab-Testplan-Project-Name.pdf) 
[TP template smartsheet](https://www.smartsheet.com/content/quality-assurance-templates?srsltid=AfmBOoqTmQO-TwjH3_J3tJtwhnEKEvIjl38GQkkhltp3SdB-pcOMaghS#project-quality-assurance-plan-template)  

## 3. Checklist


📋 Kam jis naudojamas?
* Suprastintas TC formatas, nieko nepamirštum testavimo metu,
* Užtikrintum, kad visi esminiai aspektai buvo patikrinti,
* Pagreitintum testavimą – ypač kai testavimo procesas kartojasi (pvz., kiekvienas sprintas, kiekvienas build’as),
  
📦 Kada dažniausiai naudojama?
* Smoke testing
* Regression testing
* Prieš release’ą
* Priėmimo (acceptance) testuose
🧪 Palyginimas su kitais testais:

| Testo tipas            | Tikslas                                                  | Kada naudojamas                            |
| ---------------------- | -------------------------------------------------------- | ------------------------------------------ |
| **Smoke testing**      | Ar pagrindinės funkcijos veikia?                         | Po naujos versijos diegimo                 |
| **Sanity testing**     | Ar konkretus pakeitimas nesugadino pagrindinių funkcijų? | Po klaidų pataisymo ar nedidelio pakeitimo |
| **Regression testing** | Ar niekas nesugedo po visų pakeitimų?                    | Prieš leidžiant versiją į gamybą           |


## 4. Smoke testing

