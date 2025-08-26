1. Repeat and check homework
2. HTTP/HTTPS
3. Request methods and response codes
4. API documentation
5. Request queries


## 1. Repeat and check homework

## 2. HTTP/HTTPS

Sniffing attack
https://www.okta.com/identity-101/sniffing-attack/  
https://www.greycampus.com/opencampus/ethical-hacking/sniffing-and-its-types  
https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Evolution_of_HTTP  

## 3. Request methods and response codes
[Request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)  
[Response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)   
https://httpstatusdogs.com/  


GET baseUrl/v1/todo
POST baseUrl/v1/todo
PUT baseUrl/v1/todo/1
DELETE baseUrl/v1/todo/1

## 4. API documentation

[news api](https://newsapi.org/docs)  
[jsonplaceholder](https://jsonplaceholder.typicode.com)  
[Petstore api](https://petstore.swagger.io/) 


## 5. Request queries

https://newsapi.org/v2/top-headlines/sources?
'?' -> identifies queries

Query has:
1. key name
2. vale

https://newsapi.org/v2/top-headlines/sources?apiKey=asd65f431asdf

Query has:
1. key name = apiKey
2. vale = asd65f431asdf
3. full result: apiKey=asd65f431asdf

'&' - add additional query.

https://newsapi.org/v2/top-headlines/sources
?apiKey=asd65f431asdf&category=business&country=us


https://restful-booker.herokuapp.com/booking/:id
https://restful-booker.herokuapp.com/booking/123

https://restful-booker.herokuapp.com/booking/{id}
https://restful-booker.herokuapp.com/booking/123


https://restful-booker.herokuapp.com/v1/booking/:id/user
https://restful-booker.herokuapp.com/v1/booking/123/user

https://restful-booker.herokuapp.com/v1/booking/{id}/user
https://restful-booker.herokuapp.com/v1/booking/123/user
