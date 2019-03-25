# Modules

- [Node Modules - CJS](#node-modules---cjs)
- [ECMAScript Modules](#ecmascript-modules)
  - [Default export](#default-export)
  - [Default and named exports](#default-and-named-exports)
  - [Named as exports](#named-as-exports)
  - [Named export](#named-export)
  - [Named exports](#named-exports)
  - [Named uniq exports](#named-uniq-exports)

## [Node Modules - CJS](https://nodejs.org/api/modules.html)

---

```
node-modules
├── lib.js
└── main.js
```

[node-modules/lib.js](node-modules/lib.js):

```js
{% include_relative node-modules/lib.js %}
```

[node-modules/main.js](node-modules/main.js):

```js
{% include_relative node-modules/main.js %}
```

```
$ node main.js
```

## [ECMAScript Modules](https://nodejs.org/api/esm.html)

---

### Default export

```
default-export
├── lib.mjs
└── main.mjs
```

[node-esm/default-export/lib.mjs](node-esm/default-export/lib.mjs):

```js
{% include_relative node-esm/default-export/lib.mjs %}
```

[node-esm/default-export/main.mjs](node-esm/default-export/main.mjs):

```js
{% include_relative node-esm/default-export/main.mjs %}
```

```
$ node --experimental-modules main.mjs
```

### Default and named exports

```
default-named-exports
├── lib.mjs
└── main.mjs
```

[node-esm/default-named-exports/lib.mjs](node-esm/default-named-exports/lib.mjs):

```js
{% include_relative node-esm/default-named-exports/lib.mjs %}
```

[node-esm/default-named-exports/main.mjs](node-esm/default-named-exports/main.mjs):

```js
{% include_relative node-esm/default-named-exports/main.mjs %}
```

```
$ node --experimental-modules main.mjs
```

### Named as exports

```
default-as-exports
├── lib.mjs
└── main.mjs
```

[node-esm/named-as-exports/lib.mjs](node-esm/named-as-exports/lib.mjs):

```js
{% include_relative node-esm/named-as-exports/lib.mjs %}
```

[node-esm/named-as-exports/main.mjs](node-esm/named-as-exports/main.mjs):

```js
{% include_relative node-esm/named-as-exports/main.mjs %}
```

```
$ node --experimental-modules main.mjs
```

### Named export

```
named-export
├── lib.mjs
└── main.mjs
```

[node-esm/named-export/lib.mjs](node-esm/named-export/lib.mjs):

```js
{% include_relative node-esm/named-export/lib.mjs %}
```

[node-esm/named-export/main.mjs](node-esm/named-export/main.mjs):

```js
{% include_relative node-esm/named-export/main.mjs %}
```

```
$ node --experimental-modules main.mjs
```

### Named exports

```
named-exports
├── lib.mjs
└── main.mjs
```

[node-esm/named-exports/lib.mjs](node-esm/named-exports/lib.mjs):

```js
{% include_relative node-esm/named-exports/lib.mjs %}
```

[node-esm/named-exports/main.mjs](node-esm/named-exports/main.mjs):

```js
{% include_relative node-esm/named-exports/main.mjs %}
```

```
$ node --experimental-modules main.mjs
```

### Named uniq exports

```
named-uniq-exports
├── lib.mjs
└── main.mjs
```

[node-esm/named-uniq-exports/lib.mjs](node-esm/named-uniq-exports/lib.mjs):

```js
{% include_relative node-esm/named-uniq-exports/lib.mjs %}
```

[node-esm/named-uniq-exports/main.mjs](node-esm/named-uniq-exports/main.mjs):

```js
{% include_relative node-esm/named-uniq-exports/main.mjs %}
```

```
$ node --experimental-modules main.mjs
```

## References

---

- [export \| MDN](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)
- [import \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [ECMAScript Modules](https://nodejs.org/api/esm.html)
- [Exploring JS - Modules](http://exploringjs.com/es6/ch_modules.html)
- [MDN - ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
- [ECMAScript 6 modules: the final syntax](http://2ality.com/2014/09/es6-modules-final.html)
- [ES6 Modules in Depth](https://ponyfoo.com/articles/es6-modules-in-depth)
- [Using ES modules natively in Node.js](http://2ality.com/2017/09/native-esm-node.html)

<!--
## Node @std/esm
---

[node-std-esm/lib.mjs](node-std-esm/lib.mjs):
```js
{% include_relative node-std-esm/lib.mjs %}
```

[node-std-esm/main.mjs](node-std-esm/main.mjs):
```js
{% include_relative node-std-esm/main.mjs %}
```

```
$ npm i --save @std/esm
$ node -r @std/esm main.mjs
```

[node-std-esm/main.js](node-std-esm/main.js):
```js
{% include_relative node-std-esm/main.js %}
```

```
$ node main.js
```

- [ES Modules in Node Today!](https://blogs.windows.com/msedgedev/2017/08/10/es-modules-node-today/#3OStq1rD4uTKgPiL.97)
- [Suportando Módules EcmaScript ESM no Node a partir de Hoje](http://walde.co/2017/08/21/suportando-modulos-ecmascript-esm-no-node-js-partir-de-hoje/)
- [Native ESM Node](http://2ality.com/2017/09/native-esm-node.html)
- [standard-things/esm](https://github.com/standard-things/esm)
-->
