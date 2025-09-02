1. Repeat and check homework 
2. Postman scripts


## 1. Repeat and check homework 

## 2. Postman scripts

### 📌 collection object variables 

```javascript
pm.test("Check response body booking data [object]", function () {
    const reqeustBody = pm.collectionVariables.get('postBookingRequestObj');
    const responseBody = pm.response.json();
    const errorMessage = `User ID:${responseBody.bookingid}`;

    pm.expect(responseBody.bookingid, 'Assert bookingid | ' + errorMessage).to.be.an('number').and.to.be.greaterThan(0)

    pm.expect(responseBody.booking.firstname, "Assert firstName").to.be.an('string').and.to.be.equal(reqeustBody.firstname);
    pm.expect(responseBody.booking.lastname, "Assert lastName").to.be.an('string').and.to.be.equal(reqeustBody.lastname);

    // another way to compare objects
    // pm.expect(responseBody.booking, 'Assert booking object data').to.be.equal(reqeustBody);
    pm.expect(responseBody.booking, 'Assert booking object data').to.be.eql(reqeustBody);
});

``` 

```javascript
pm.test('Demo object', function () {
    const obj01 = {
        "firstname": "Gerda",
        "lastname": "Haha",
        "totalprice": 870,
        "depositpaid": false,
        "bookingdates": {
            "checkin": "2016-08-06",
            "checkout": "2017-06-26"
        },
        "additionalneeds": "Breakfast"
    }

    const obj02 = {
        "firstname": "Gerda",
        "lastname": "Haha",
        "totalprice": 870,
        "depositpaid": false,
        "bookingdates": {
            "checkin": "2016-08-06",
            "checkout": "2017-06-26"
        },
        "additionalneeds": "Breakfast"
    }

    // pm.expect(obj01 == obj02, "frist").to.be.true;
    // pm.expect(obj01 === obj02, "second").to.be.true;
    pm.expect(obj01, 'Assert booking object data').to.be.eql(obj02);
    // pm.expect(obj01, 'Assert booking object data').to.be.equal(obj02);
});
```

### 📌 headers

### Set up headers:
```javascript
function setupHeaders() {
    const token = pm.collectionVariables.get("token");

    const contentType = {
        key: "Content-Type",
        value: "application/json"
    }

    const cookie = {
        key: "Cookie",
        value: `token=${token}`
    }

    pm.request.headers.add(contentType);
    pm.request.headers.add(cookie);
}
``` 
### Provide data for request body:
```javascript
function setupBody() {
    const body = {
        "firstname": "Some First Name",
        "lastname": "Some Last Name",
        "totalprice": 870,
        "depositpaid": false,
        "bookingdates": {
            "checkin": "2016-08-06",
            "checkout": "2017-06-26"
        },
        "additionalneeds": "Breakfast"
    }

    pm.request.body.raw = JSON.stringify(body);
}
``` 


