# [WIP]

```
{
  "name": "3_taskrunner",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "run-s build:*",
    "build:html": "pug src/index.pug --out dist",
    "build:js": "buble src/js/app.js > dist/js/bundle.js",
    "build:css": "node-sass src/css/style.scss dist/css/style.css"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "buble": "^0.19.3",
    "node-sass": "^4.9.0",
    "npm-run-all": "^4.1.3",
    "pug-cli": "^1.0.0-alpha6"
  }
}

```