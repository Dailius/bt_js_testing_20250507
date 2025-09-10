1. Newman reports
2. Node express project 'express_usr_mn' 

## 1. Newman reports

https://learning.postman.com/docs/collections/using-newman-cli/newman-built-in-reporters/  

https://learning.postman.com/docs/collections/using-newman-cli/newman-custom-reporters/  

https://www.npmjs.com/package/newman-reporter-htmlextra  

Install globally `htmlextra`: 
```bash
npm install -g newman-reporter-htmlextra
```

Install locally `htmlextra` as dependency: 
```bash
npm i -S newman-reporter-htmlextra
```

Run tests with html reporting:
```bash
newman run collection.json -r htmlextra

# or

npx newman run collection.json -r htmlextra
```


## 2. Node express project 'express_usr_mn

New node.js project creation:  
```bash
npm init -y
npm i express
git init
# copy/past .gitignore file into root directory
git add .
git commit -m "Initial commit"
```

Stop server: CTRL + C  

https://www.npmjs.com/package/newman-reporter-htmlextra
```bash
npm i -g newman-reporter-htmlextra
# or
npm i -S newman-reporter-htmlextra
```



