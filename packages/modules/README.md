# Modules

- [HTML Scripts](#html-scripts)
- HTML ESM
  - [Simple](#html-esm)
  - [Include packages (fail)](#html-esm-fail)
- Bundler
  - [Parcel](#html-esm---parcel-bundler)
  - Webpack
    - [Simple](#html-esm---webpack-bundler)
    - [Config file](#html-escm---webpack-bundler---config)
    - [Babel](#html-esm---webpack-bundler---babel)
    - [Node modules](#node-modules---webpack-bundler)

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

```
$ npm init -y
$ npm i date-fns -s
$ npm i parcel-bundler -D
```

```js
{% include_relative html-parcel-esm/package.json %}
```

```
$ npm install
$ npm list | grep date-fns
└── date-fns@1.29.0
```

```
$ npx parcel index.html
```

```
$ tree .
html-parcel-esm
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

[html-webpack-esm/js/lib.mjs](html-webpack-esm/js/lib.mjs):
```js
{% include_relative html-webpack-esm/js/lib.mjs %}
```

[html-webpack-esm/js/main.mjs](html-webpack-esm/js/main.mjs):
```js
{% include_relative html-webpack-esm/js/main.mjs %}
```

[html-webpack-esm/index.html](html-webpack-esm/index.html):
```html
{% include_relative html-webpack-esm/index.html %}
```

[html-webpack-esm/package.json](html-webpack-esm/package.json):

```
$ npm init -y
$ npm i date-fns -s
$ npm i webpack webpack-cli -D
```

```js
{% include_relative html-webpack-esm/package.json %}
```

```
$ npx webpack js/main.mjs --mode development
Hash: 0efd707d06341ed4a9fe
Version: webpack 4.16.2
Time: 633ms
Built at: 07/24/2018 10:38:19 AM
  Asset     Size  Chunks             Chunk Names
main.js  271 KiB    main  [emitted]  main
Entrypoint main = main.js
[./js/lib.js] 94 bytes {main} [built]
[./js/main.js] 175 bytes {main} [built]
    + 159 hidden modules
```

```
$ tree .
html-webpack-esm
├── dist
│   └── main.js
├── js
│   ├── lib.mjs
│   └── main.mjs
├── node_modues
│   └── ...
├── index.html
└── package-lock.json
└── package.json
```

```
$ chrome index.html
```

```
$ npm run build-dev

> html-webpack-esm@1.0.0 build-dev /home/user/html-webpack-esm
> npx webpack js/main.js --mode development

Hash: 0efd707d06341ed4a9fe
Version: webpack 4.16.2
Time: 587ms
Built at: 07/24/2018 10:37:33 AM
  Asset     Size  Chunks             Chunk Names
main.js  271 KiB    main  [emitted]  main
Entrypoint main = main.js
[./js/lib.js] 94 bytes {main} [built]
[./js/main.js] 175 bytes {main} [built]
    + 159 hidden modules
```

## HTML ESM - Webpack Bundler - Config
---

```
html-webpack-esm-config
├── index.html
├── js
│   ├── lib.mjs
│   └── main.mjs
├── package.json
└── webpack.config.js
```

[html-webpack-esm-config/js/lib.mjs](html-webpack-esm-config/js/lib.mjs):
```js
{% include_relative html-webpack-esm-config/js/lib.mjs %}
```

[html-webpack-esm-config/js/main.mjs](html-webpack-esm-config/js/main.mjs):
```js
{% include_relative html-webpack-esm-config/js/main.mjs %}
```

[html-webpack-esm-config/index.html](html-webpack-esm-config/index.html):
```html
{% include_relative html-webpack-esm-config/index.html %}
```

[html-webpack-esm-config/package.json](html-webpack-esm-config/package.json):

```
$ npm init -y
$ npm i date-fns -s
$ npm i webpack webpack-cli -D
```

```js
{% include_relative html-webpack-esm-config/package.json %}
```

[html-webpack-esm-config/webpack.config.js](html-webpack-esm-config/webpack.config.js):
```js
{% include_relative html-webpack-esm-config/webpack.config.js %}
```

```
$ npm run build-dev

> html-webpack-esm@1.0.0 build-dev /home/user/html-webpack-esm-config
> npx webpack --mode development

Hash: 381cb32daa0a9b43ac50
Version: webpack 4.16.2
Time: 692ms
Built at: 07/24/2018 12:21:38 PM
    Asset     Size  Chunks             Chunk Names
bundle.js  271 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./js/lib.js] 94 bytes {main} [built]
[./js/main.js] 175 bytes {main} [built]
    + 159 hidden modules
```

```
$ chrome index.html
```

## HTML ESM - Webpack Bundler - Babel
---

```
html-webpack-esm-babel
├── index.html
└── js
    ├── lib.js
    └── main.js

```

[html-webpack-esm-babel/js/lib.mjs](html-webpack-esm-babel/js/lib.mjs):
```js
{% include_relative html-webpack-esm-babel/js/lib.mjs %}
```

[html-webpack-esm-babel/js/main.mjs](html-webpack-esm-babel/js/main.mjs):
```js
{% include_relative html-webpack-esm-babel/js/main.mjs %}
```

[html-webpack-esm-babel/index.html](html-webpack-esm-babel/index.html):
```html
{% include_relative html-webpack-esm-babel/index.html %}
```

[html-webpack-esm-babel/package.json](html-webpack-esm-babel/package.json):

```
$ npm init -y
$ npm i date-fns -s
$ npm i webpack webpack-cli @webpack-cli/init -D
```

```js
{% include_relative html-webpack-esm-babel/package.json %}
```

[html-webpack-esm-babel/webpack.dev.js](html-webpack-esm-babel/webpack.dev.js):

```
$ npx webpack init
? Will your application have multiple bundles? No
? Which module will be the first to enter the application? [default: ./src/index] ./js/main.mjs
? Which folder will your generated bundles be in? [default: dist]:
? Will you be using ES2015? Yes
? Will you use one of the below CSS solutions? No
...
Congratulations! Your new webpack configuration file has been created!
```

```js
{% include_relative html-webpack-esm-babel/webpack.dev.js %}
```

```
$ npx webpack --config webpack.dev.js
Hash: cf61f9a11c1734bbe58f
Version: webpack 4.16.2
Time: 1470ms
Built at: 07/24/2018 6:27:30 PM
    Asset     Size  Chunks             Chunk Names
bundle.js  271 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./js/lib.js] 151 bytes {main} [built]
[./js/main.js] 214 bytes {main} [built]
    + 159 hidden modules
```

```
$ npm run build-dev

> html-webpack-esm-babel@1.0.0 build-dev /home/user/html-webpack-esm-babel
> npx webpack --config webpack.dev.js

Hash: cf61f9a11c1734bbe58f
Version: webpack 4.16.2
Time: 1732ms
Built at: 07/24/2018 6:28:45 PM
    Asset     Size  Chunks             Chunk Names
bundle.js  271 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./js/lib.js] 151 bytes {main} [built]
[./js/main.js] 214 bytes {main} [built]
    + 159 hidden modules
```

```
$ chrome index.html
```

## Node Modules - Webpack Bundler
---

```
html-webpack-node-modules
├── index.html
├── js
│   ├── lib.js
│   └── main.js
├── package.json
└── webpack.config.js
```

[html-webpack-node-modules/js/lib.js](html-webpack-node-modules/js/lib.js):
```js
{% include_relative html-webpack-node-modules/js/lib.js %}
```

[html-webpack-node-modules/js/main.js](html-webpack-node-modules/js/main.js):
```js
{% include_relative html-webpack-node-modules/js/main.js %}
```

[html-webpack-node-modules/index.html](html-webpack-node-modules/index.html):
```html
{% include_relative html-webpack-node-modules/index.html %}
```

[html-webpack-node-modules/package.json](html-webpack-node-modules/package.json):
```js
{% include_relative html-webpack-node-modules/package.json %}
```

[html-webpack-node-modules/webpack.config.js](html-webpack-node-modules/webpack.config.js):
```js
{% include_relative html-webpack-node-modules/webpack.config.js %}
```

```
$ npm run build-dev

> html-webpack-esm@1.0.0 build-dev /home/user/html-webpack-esm-config
> npx webpack --mode development

Hash: 381cb32daa0a9b43ac50
Version: webpack 4.16.2
Time: 692ms
Built at: 07/24/2018 12:21:38 PM
    Asset     Size  Chunks             Chunk Names
bundle.js  271 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./js/lib.js] 94 bytes {main} [built]
[./js/main.js] 175 bytes {main} [built]
    + 159 hidden modules
```

```
$ chrome index.html
```

## References
---

- [Using JavaScript modules on the web](https://developers.google.com/web/fundamentals/primers/modules)
- [Parcel](https://parceljs.org)
- [Webpack](https://webpack.js.org)
  - Webpack CSS
    - [Webpack 2 handling Sass](https://www.constructcode.com/post/webpack-2-handling-sass)
    - [Compile SASS with Webpack into a CSS file](https://florianbrinkmann.com/en/4240/sass-webpack/)
    - [Webpack Loaders, CSS and Style Loaders](https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a)
- [Babel.js](https://babeljs.io)
  - [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env/)

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