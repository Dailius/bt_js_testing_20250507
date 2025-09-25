## 1. project express_usr_auth

### API breaking change  
https://docs.github.com/en/rest/about-the-rest-api/breaking-changes?apiVersion=2022-11-28  


### JWT

https://www.npmjs.com/package/jsonwebtoken  
https://github.com/auth0/node-jsonwebtoken  

https://jwt.io/

Struktura:  
1. header
2. payload
3. signature


### JWT vs API key

API key – A value provided by code when calling an API to identify and authorize the caller. It is intended to be used programmatically and is often a long string of letters and numbers.

Token – A piece of data that represents a user session or specific privileges. Used by individual users for a limited period of time.

API key good for BE (connection between systems), very bad for FE.
JWT good for FE (user authentication and authorization), very bad for BE.

