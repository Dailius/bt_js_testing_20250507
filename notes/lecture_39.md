1. Readme
2. HTTP Server run html files


## 1. Readme

[GitHub markdown doc](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

Require to answer core questions:  
1. Description
2. Tech stack or requirements
3. Installation
4. How to run

https://github.com/othneildrew/Best-README-Template  
https://github.com/dotnet/eShop  
https://github.com/aregtech/areg-sdk#readme  

Example for project file structure:  
```
    📁  
    ├── 📁 build
    ├── 📁 docs     # Documentation files 
    ├── 📁 src      # Source files
    ├── 📁 test     # Automated tests 
    ├── 📁 tools    # Tools and utilities
    ├── LICENSE
    └── README.md
```

## 2. HTTP Server run html files

https://www.npmjs.com/package/http-server  

### Install and run locally:  
```bash
npm i http-server --save-dev
```

Run locally installed server within project root directory (`09_cypress_demo`):  
```bash
npx http-server -p 8086
```
http://127.0.0.1:8086/demo.html
http://localhost:8086/demo.html

Stop running server: CTRL + C

### Install and run globally:    

Install:  
```bash
npm i -g http-server
```

Run:
```bash
http-server -p 8086
```

http://127.0.0.1:8086/demo.html
http://localhost:8086/demo.html

Stop running server: CTRL + C

### package.json scripts
```bash
npm i concurrently wait-on --save-dev
```

package.json script:
```json
{
"scripts": {
    "server": "http-server -p 8086",
    "cy:open": "npx cypress open",
    "srv:cy:o": "concurrently -k \"npm run server\" \"wait-on http://127.0.0.1:8086 && npm run cy:open\""
  },
}
```

Run scripts from package.json: 
```bash
npm run srv:cy:o
```
