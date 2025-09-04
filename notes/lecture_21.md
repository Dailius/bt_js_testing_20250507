1. Newman tools
2. GitHub Actions

## 1. Newman tools

```bash
# initiate node project:
npm init -y

# install libs
npm i newman # adds lib into dependencies
npm i newman --save-dev # adds lib into devdependencies
npm i -g newman  # adds lib globally.

# install libs mac ps
sudo npm install -g newman
```

```bash
# run newman GLOBALLY
# newman run postman_file_name.json
newman run JsonPlaceHolder.json

# run newman from PROJECT
npx newman run JsonPlaceHolder.json
```

```bash
# run newman with environment file
newman run JsonPlaceHolder.json -e env_JsonPlaceHolder.json

# run newman from PROJECT with environment file
npx newman run JsonPlaceHolder.json -e env_JsonPlaceHolder.json
```

Describe package.json scripts:
```json
"scripts": {
    "api": "npx newman run JsonPlaceHolder.json",
    "api:env": "npx newman run JsonPlaceHolder.json -e env_JsonPlaceHolder.json"
  },
```

## 2. GitHub Actions

Create GitHub repo in order to link with your local repo. 
Require run git codes as following example: 
```bash
git remote add origin https://github.com/Dailius/bt-250507-newman_demo.git
git branch -M main
git push -u origin main
```

.github/actions/node.js.yml
```yaml
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
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm run api:env
    # - run: npm i -g newman
    # - run: newman run JsonPlaceHolder.json -e env_JsonPlaceHolder.json
```
