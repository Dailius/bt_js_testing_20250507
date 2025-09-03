1. Repeat and check homework 
2. Dynamic variables
3. Newman tools
4. GitHub Actions
5. Newman reports

## 1. Repeat and check homework 
## 2. Dynamic variables

https://learning.postman.com/docs/sending-requests/variables/variables/  

https://learning.postman.com/docs/tests-and-scripts/write-scripts/variables-list/  

https://learning.postman.com/docs/tests-and-scripts/write-scripts/postman-sandbox-api-reference/  

Postman random values for request body:
```json
{
    "firstname": "{{$randomFirstName}}",
    "lastname": "{{$randomLastName}}",
    "totalprice": {{$randomInt}},
    "depositpaid": {{$randomBoolean}},
    "bookingdates": {
        "checkin": "{{$randomDateRecent}}",
        "checkout": "{{$randomDateFuture}}"
    },
    "additionalneeds": "{{$randomLoremWords}}"
}
```

## 3. Newman tools

https://learning.postman.com/docs/collections/using-newman-cli/installing-running-newman/   

https://www.npmjs.com/package/newman  


```bash
# initiate node project:
npm init -y

# install libs
npm i newman # adds lib into dependencies
npm i newman --save-dev # adds lib into devdependencies
npm i -g newman  # adds lib globally.
```

## 4. GitHub Actions
## 5. Newman reports
