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



[unit-test-jest/lib/sum.test.js](unit-test-jest/lib/sum.test.js):
```js
{% include_relative unit-test-jest/lib/sum.test.js %}
```

### Running jest (fail)

unit-test-jest/lib/sum.js:
```js
function sum(a, b) {
  // TODO
}

export { sum }
```

Running Tests and Viewing Results (test fail):
```
$ npx jest
 FAIL  lib/sum.test.js
  Number Tools
    ✕ adding 1 + 2 (18ms)
    ✕ adding 3 + 2 (2ms)

  ● Number Tools › adding 1 + 2

    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: undefined

    Difference:

      Comparing two different types of values. Expected number but received undefined.

      4 |
      5 |   test('adding 1 + 2', () => {
    > 6 |     expect(sum(1, 2)).toBe(3)
        |                       ^
      7 |   })
      8 |
      9 |   test('adding 3 + 2', () => {

      at Object.toBe (lib/sum.test.js:6:23)

  ● Number Tools › adding 3 + 2

    expect(received).toBe(expected) // Object.is equality

    Expected: 5
    Received: undefined

    Difference:

      Comparing two different types of values. Expected number but received undefined.

       8 |
       9 |   test('adding 3 + 2', () => {
    > 10 |     expect(sum(3, 2)).toBe(5)
         |                       ^
      11 |   })
      12 |
      13 | })

      at Object.toBe (lib/sum.test.js:10:23)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 total
Snapshots:   0 total
Time:        2.317s
Ran all test suites.
```

### Running jest (pass)

[unit-test-jest/lib/sum.js](unit-test-jest/lib/sum.js):
```js
{% include_relative unit-test-jest/lib/sum.js %}
```

Running Tests and Viewing Results (test passed):
```
$ npx jest
 PASS  lib/sum.test.js
  Number Tools
    ✓ adding 1 + 2 (5ms)
    ✓ adding 3 + 2 (1ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.55s
Ran all test suites.
```

### Running jest (watch)

Running Tests and Viewing Results (Automatic)
```
$ npx jest --watch lib/sum.test.js
```

### Running jest (coverage)

Running Tests and Viewing Results (Coverage)
```
$ npx jest --coverage lib/ 
```