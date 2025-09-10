## Node express project 'express_usr_mng'

Install dependencies:
```bash
npm i concurrently wait-on start-server-and-test --save-dev
npm i newman --save-dev
npm i start-server-and-test --save-dev
```

https://www.npmjs.com/package/concurrently  
https://www.npmjs.com/package/wait-on  
https://www.npmjs.com/package/newman-reporter-htmlextra

package.json file scripts details:  
```json
{
"scripts": {
    "dev": "node --watch .",
    "test": "npx newman run postman.json -r htmlextra",
    "api:c": "concurrently -k \"npm run dev\" \"wait-on http://localhost:3011/user && npm run test\"",
    "api:s": "start-server-and-test dev http://localhost:3011/user test",

    "dev:n": "node .",
    "test:n": "npx newman run postman.json",
    "api:sn": "start-server-and-test dev:n http://localhost:3011/user test:n",
    
    "api:st": "start-server-and-test \"node .\" http://localhost:3011/user \"npx newman run postman.json\""
  }
}
```

