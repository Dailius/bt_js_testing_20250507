1. Repeat and check homework
2. JSON
3. Postman scripts

## 1. Repeat and check homework

## 2. JSON

Json no 001
```json
{
    "key": "value",
    "parameter_name": "parameter_value",
    "text": "some text value",
    "number_int": 1,
    "number_float": 1.1,
    "boolean": true,
    "object": {
        "first": "asdfa",
        "second": {},
        "type": 456
    },
    "array": [
        "asdfa", 12, true, {}
    ]
}
```
```json
[
    {},
    {},
    {},
    {},
    {},
]
```

demo_obj_json this object loaded data from json no 001 as in above.

demo_obj_json.text == "some text value"
demo_obj_json.number_float = 2.2 -> this way we add new value for key 'number_float'

demo_obj_json.array[0]
demo_obj_json.object.type
demo_obj_json.object.second


## 3. Postman scripts
AAA testing pattern:  
https://semaphore.io/blog/aaa-pattern-test-automation  

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test('Test source properies', ()=>{
    const response = pm.response.json();

    pm.expect(response.firstname).to.be.an('string').and.to.equal('Some_name');
    // pm.expect(response.firstname).to.be.an('number').and.to.equal('Some_name');
    pm.expect(response.firstname).to.equal('Some_name');
    // pm.expect(response.firstname_fake).to.equal('Some_name');
    pm.expect(response.firstname).to.be.an('string');
    pm.expect(response.totalprice).to.be.an('number');
    pm.expect(response.depositpaid).to.be.an('boolean');
    pm.expect(response.bookingdates).to.be.an('object');
    pm.expect(response.some_property_array_name).to.be.an('array');
});
``` 
