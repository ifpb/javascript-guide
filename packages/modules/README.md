# Modules

https://developers.google.com/web/fundamentals/primers/modules?ct=t(BrazilJS_Weekly_468_9_2013_COPY_01)

<!--
## Node @std/esm
---
[ES Modules in Node Today!](https://blogs.windows.com/msedgedev/2017/08/10/es-modules-node-today/#3OStq1rD4uTKgPiL.97)
[Suportando Módules EcmaScript ESM no Node a partir de Hoje](http://walde.co/2017/08/21/suportando-modulos-ecmascript-esm-no-node-js-partir-de-hoje/)
[Native ESM Node](http://2ality.com/2017/09/native-esm-node.html)
[standard-things/esm](https://github.com/standard-things/esm)

[node-std-esm/sum.js](node-std-esm/sum.js)
```js
export function sum(a, b) {
  return a + b;
}
```

[node-std-esm/main.mjs](node-std-esm/main.mjs)
```js
import { sum } from './sum'

console.log(sum(1, 2))
```

```
$ npm i --save @std/esm
$ node -r @std/esm main.mjs
```

[node-std-esm/main.js](node-std-esm/main.js)
```js
require("@std/esm")
module.exports = require("./main.mjs").default
```

```
$ node main.js
```

## Node Modules
---
[Node Modules](https://nodejs.org/api/modules.html)

[node-modules/simple/lib.mjs](node-modules/simple/lib.mjs)
```js
module.exports = function sum(a, b) {
  return a + b
}
```

[node-modules/simple/main.mjs](node-modules/simple/main.mjs)
```js
const sum = require('./lib.mjs')

console.log(sum(1, 2))
```

```
$ node --experimental-modules main.mjs
```

## Node ES Modules
---
[ECMAScript Modules](https://nodejs.org/api/esm.html)
MDN: [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export), [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
[Exploring JS - Modules](http://exploringjs.com/es6/ch_modules.html)
[MDN - ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
[ECMAScript 6 modules: the final syntax](http://2ality.com/2014/09/es6-modules-final.html)
[ES6 Modules in Depth](https://ponyfoo.com/articles/es6-modules-in-depth)
[Using ES modules natively in Node.js](http://2ality.com/2017/09/native-esm-node.html)

[node-std-esm/sum.mjs](node-std-esm/sum.mjs)
```js
export function sum(a, b) {
  return a + b;
}
```

[node-std-esm/main.mjs](node-std-esm/main.mjs)
```js
import { sum } from './sum.mjs'

console.log(sum(1, 2))
```

```
$ node --experimental-modules main.mjs
``` 

[node-esm/multiple/lib.mjs](node-esm/multiple/lib.mjs)
```js
export function sum(x, y) {
  return x + y
}

export function minus(x, y) {
  return x - y
}
```

[node-esm/multiple/main.mjs](node-esm/multiple/main.mjs)
```js
import {sum, minus} from './lib.mjs'
console.log(sum(10, 5))
console.log(minus(10, 5))
```

```
$ node --experimental-modules main.js
```

[node-esm/multiple-as/main.mjs](node-esm/multiple-as/main.mjs)
```js
import * as lib from './lib.mjs'
console.log(lib.sum(10, 5))
console.log(lib.minus(10, 5))
```

```
$ node --experimental-modules main.js
```

## ES Modules (HTML)


## webpack
npm | yarn
uglify
babel
npm scripts
## parcel

https://babeljs.io/docs/setup/#installation
https://babeljs.io/repl/
https://github.com/mishoo/UglifyJS2
https://date-fns.org/v2.0.0-alpha.2/docs/Getting-Started
http://cdn.date-fns.org/v2.0.0-alpha0/date_fns.js
https://parceljs.org/getting_started.html
https://webpack.js.org/
https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f
https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c
https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b
https://ifpb.github.io/ls/docs/OUTLINE.html#-30---comentários-sobre-o-simulado-31012018

npx babel js/lib.mjs  --presets env

npm scripts
https://scotch.io/tutorials/using-npm-as-a-build-tool
https://css-tricks.com/why-npm-scripts/
http://ccoenraets.github.io/es6-tutorial/setup-webpack/
https://babeljs.io/docs/plugins/preset-es2015/#top
https://babeljs.io/docs/plugins/preset-env/#examples
https://babeljs.io/docs/setup/#installation
https://webpack.js.org/loaders/babel-loader/#usage
https://babeljs.io/docs/plugins/preset-es2015/#via-cli
https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
---

TODO
module loader
https://github.com/whatwg/loader
https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules
https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Using
http://eloquentjavascript.net/10_modules.html
http://exploringjs.com/es6/ch_modules.html
https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
https://appendto.com/2016/06/the-short-history-of-javascript-module-loaders/
https://www.sitepoint.com/understanding-es6-modules/
https://www.sitepoint.com/understanding-module-exports-exports-node-js/
http://www.zsoltnagy.eu/using-es6-modules-with-webpack/
https://github.com/shama/es6-loader
https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.hyjm8bskp
https://braziljs.org/blog/modulos-no-javascript-moderno/
http://tableless.com.br/modularizacao-em-javascript/
https://darrenderidder.github.io/talks/ModulePatterns/ (CJS)

// IIFE
// AMD
// bar.js
define(function () {
    return 'bar';
});

// app.js
require(['bar'], function(bar) {
    console.log(bar); // bar
});

// CommonJs

// ES6: export, import

// Babeljs
// es2015-modules-amd
// es2015-modules-commonjs
// es2015-modules-systemjs
// es2015-modules-umd

// Webpack
// https://webpack.github.io/
// https://github.com/babel/babel-loader

// Browserify
-->
