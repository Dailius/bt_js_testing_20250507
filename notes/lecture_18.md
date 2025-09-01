1. Repeat and check homework
2. Postman scripts

## 1. Repeat and check homework


## 2. Postman scripts

```javascript

// json conversion to object
// JSON.parse()
JSON.parse(pm.request.body.raw)

// Object conversion to json (string type)
// JSON.stringify()
JSON.stringify(some_object)
```

Save variables, objects into Collection variables
```javascript
function saveRequestData() {
    const request = JSON.parse(pm.request.body.raw);

    // save as variables
    pm.collectionVariables.set('firstName', request.firstname);
    pm.collectionVariables.set('lastName', request.lastname);
    pm.collectionVariables.set('totalprice', request.totalprice);
    pm.collectionVariables.set('depositpaid', request.depositpaid);
    pm.collectionVariables.set('checkin', request.bookingdates.checkin);
    pm.collectionVariables.set('checkout', request.bookingdates.checkout);
    pm.collectionVariables.set('additionalneeds', request.additionalneeds);

    // save as object
    pm.collectionVariables.set('postBookingRequestObj', request);
    pm.collectionVariables.set('postBookingRequestStr', pm.request.body.raw);
}
```

Get variables, objects from Collection variables:
```javascript
const firstName = pm.collectionVariables.get('firstName');
const lastName = pm.collectionVariables.get('lastName');

const reqeustBody = pm.collectionVariables.get('postBookingRequestObj');
```
