#Test

## [Jest using babel (ESM)](https://jestjs.io/docs/en/getting-started#using-babel):
---

### Install dependencies
```
$ cd project
$ npm i -D jest babel-jest babel-core regenerator-runtime babel-preset-env
```

### Project
```
$ tree . -I node_modules
.
├── lib
│   ├── sum.js
│   ├── sum.print.mjs
│   └── sum.test.js
├── package-lock.json
└── package.json

1 directory, 5 files
```

[unit-test-jest/.babelrc](unit-test-jest/.babelrc):
```js
{% include_relative unit-test-jest/.babelrc %}
```

[unit-test-jest/lib/sum.test.js](unit-test-jest/lib/sum.test.js):
```js
{% include_relative unit-test-jest/lib/sum.test.js %}
```

