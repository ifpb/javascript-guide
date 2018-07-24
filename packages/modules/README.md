# Modules

## HTML Scripts
---

```
html-script
├── index.html
└── js
    ├── lib.js
    └── main.js
```

[html-script/js/lib.js](html-script/js/lib.js):
```js
{% include_relative html-script/js/lib.js %}
```

[html-script/js/main.js](html-script/js/main.js):
```js
{% include_relative html-script/js/main.js %}
```

[html-script/index.html](html-script/index.html):
```html
{% include_relative html-script/index.html %}
```

## HTML ESM
---

```
html-esm
├── index.html
└── js
    ├── lib.mjs
    └── main.mjs
```

[html-esm/js/lib.mjs](html-esm/js/lib.mjs):
```js
{% include_relative html-esm/js/lib.mjs %}
```

[html-esm/js/main.mjs](html-esm/js/main.mjs):
```js
{% include_relative html-esm/js/main.mjs %}
```

[html-esm/index.html](html-esm/index.html):
```html
{% include_relative html-esm/index.html %}
```

## HTML ESM FAIL
---

```
html-esm-fail
├── index.html
└── js
    ├── date_fns.js
    ├── lib.mjs
    └── main.mjs
```

[html-esm-fail/js/lib.mjs](html-esm-fail/js/lib.mjs):
```js
{% include_relative html-esm-fail/js/lib.mjs %}
```

[html-esm-fail/js/main.mjs](html-esm-fail/js/main.mjs):
```js
{% include_relative html-esm-fail/js/main.mjs %}
```

[html-esm-fail/index.html](html-esm-fail/index.html):
```html
{% include_relative html-esm-fail/index.html %}
```

## HTML ESM - Parcel Bundler
---

```
html-parcel-esm
├── index.html
├── js
│   ├── lib.mjs
│   └── main.mjs
└── package.json
```

[html-parcel-esm/js/lib.mjs](html-parcel-esm/js/lib.mjs):
```js
{% include_relative html-parcel-esm/js/lib.mjs %}
```

[html-parcel-esm/js/main.mjs](html-parcel-esm/js/main.mjs):
```js
{% include_relative html-parcel-esm/js/main.mjs %}
```

[html-parcel-esm/index.html](html-parcel-esm/index.html):
```html
{% include_relative html-parcel-esm/index.html %}
```

[html-parcel-esm/package.json](html-parcel-esm/package.json):
```js
{% include_relative html-parcel-esm/package.json %}
```

```
$ npm init -y
$ npm i date-fns -s
$ npm i parcel-bundler -D
```

```
$ npm install
$ npm list | grep date-fns
└── date-fns@1.29.0
```

```
$ npx parcel index.html
$ tree .
html-webpack-esm
├── dist
│   ├── index.html
│   ├── main.b0ab085c.js
│   └── main.b0ab085c.map
├── js
│   ├── lib.js
│   └── main.js
├── node_modues
│   └── ...
├── index.html
└── package-lock.json
└── package.json
```

```
$ chrome http://localhost:1234
```

## HTML ESM - Webpack Bundler
---

```
html-webpack-esm
├── index.html
├── js
│   ├── lib.mjs
│   └── main.mjs
└── package.json
```

[html-webpack-esm/js/lib.js](html-webpack-esm/js/lib.js):
```js
{% include_relative html-webpack-esm/js/lib.js %}
```

[html-webpack-esm/js/main.js](html-webpack-esm/js/main.js):
```js
{% include_relative html-webpack-esm/js/main.js %}
```

[html-webpack-esm/index.html](html-webpack-esm/index.html):
```html
{% include_relative html-webpack-esm/index.html %}
```

[html-webpack-esm/package.json](html-webpack-esm/package.json):
```js
{% include_relative html-webpack-esm/package.json %}
```

```
$ npm init -y
$ npm i date-fns -s
$ npm i webpack webpack-cli -D
```

```
$ npx webpack js/main.js --mode development
$ tree .
html-webpack-esm
├── dist
│   └── main.js
├── js
│   ├── lib.js
│   └── main.js
├── node_modues
│   └── ...
├── index.html
└── package-lock.json
└── package.json
```

```
$ chrome index.html
```

## References
---

- [Using JavaScript modules on the web](https://developers.google.com/web/fundamentals/primers/modules)
- [Parcel](https://parceljs.org)
- [Webpack](https://webpack.js.org)

<!--

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