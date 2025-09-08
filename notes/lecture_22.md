1. Repeat and check homework
2. Newman env parameter

## 1. Repeat and check homework
## 2. Newman env parameter

```bash
newman run newsapi.json -e env_newsapi.json
```

```bash
newman run newsapi.json --env-var "envApiKey=144e0c5c31324ea199b7e9cb410e96d0"
```

GitHum yml file config: 
```yml
name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        
    - run: npm i -g newman

    - name: Run Postman tests
      env: 
        API_KEY: ${{ secrets.APIKEY }}
      run: newman run newsapi.json --env-var "envApiKey=$API_KEY"
```
