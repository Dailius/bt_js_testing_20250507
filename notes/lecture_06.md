1. Repeat and check homework
2. Test Scenarios (TS) and Test Cases (TC)

## 1. Repeat and check homework

UI - user interface
API - application programming interface
CLI - command line interface

Testing types
Testing levels

todo app:
TS01 Create new todo
TS02 Edit todo
TS03 Change todo status
TS04 Change all todo status
TS05 Count active todo
TS06 Filter
TS07 Delete one todo
TS08 Delete all completed todo
TS09 Cashing data locally
TS10 UI/UX

## 2. Test Scenarios (TS) and Test Cases (TC)

TS should have unique ID and name
TS contains TC

TC are positive and negative
positive with valid testing data.
negative one field with invalid data or one incorrect action.

**TS always STARTS with POSITIVE TC.**

TC contains:
1. Unique ID
2. Name/title
3. Steps
4. Expected result
5. Actual result
6. Status (PASS / FAIL/ Pass with exception / Block)

* Description/notes/summary  
* pre-requisites:
    Ex: login, should be at least one todo/task etc.
* post-requisites:
    Ex: logout, close something etc.

* Testing data might be written in description or per each step separately.

### TS01 Registration example 
    firstName (min 3 symbols and max 25 symbols),  
    lastName (no limits),  
    email, 
    password, 
    repeat password


TC_1.1. Positive registration when fist name contains 3 letters

    1st step: enter firstName, 
    2nd step: enter lastName,  
    3rd step: enter email, 
    4th step: enter password, 
    5th step: enter repeat password
    6th step: click on button 'Register' 

    Expected result: "Success message"
    Actual result:
    Status: Pass/Fail

TC_1.2. Positive registration when fist name contains 25 letters  

    1st step: enter firstName, 
    2nd step: enter lastName,  
    3rd step: enter email, 
    4th step: enter password, 
    5th step: enter repeat password
    6th step: click on button 'Register' 

    Expected result: "Success message"
    Actual result:
    Status: Pass/Fail

TC_1.3. Negative registration when fist name contains 2 letters
    1st step: enter firstName, 
    2nd step: enter lastName,  
    3rd step: enter email, 
    4th step: enter password, 
    5th step: enter repeat password
    6th step: click on button 'Register' 

    Expected result: Error message "first name too short"
    Actual result:
    Status: Pass/Fail

TC_1.4. Negative registration when fist name contains 26 letters 
TC_1.5. Negative registration when fist name empty  
TC_1.6. Negative registration when fist name is incorrect
TC_1.7. Negative registration when last name contains 2 letters
TC_1.8. Negative registration when last name contains 26 letters 
TC_1.9. Negative registration when last name empty  
TC_1.10. Negative registration when last name is incorrect
TC_1.10. Negative registration when password length is 7 symbols
TC_1.11. Negative registration when password do not contains digit
TC_1.12. Negative registration when password do not contains capital letter
TC_1.13. Negative registration when password is empty
...


### TS01 Create new todo


TC_1.1. Positive create new todo

    Pre-requisite: open app https://todolist.james.am/#/
    1. Input task name: go to grocery store
    2. Press 'Enter' key to save
    3. Observe result
    
    Expected result: new task appear in the list below
    Actual result:
    Status: Pass/Fail

TC_1.2. Negative keep todo task name empty
    Pre-requisite: open app https://todolist.james.am/#/
    1. Input task name: leave empty
    2. Press 'Enter' key to save
    3. Observe result
    
    Expected result: do not allow to create new todo task
    Actual result:
    Status: Pass/Fail

TC_1.3. Negative create todo task when name contain spaces
    Pre-requisite: open app https://todolist.james.am/#/
    1. Input task name: leave empty
    2. Press 'Enter' key to save
    3. Observe result
    
    Expected result: do not allow to create new todo task
    Actual result:
    Status: Pass/Fail