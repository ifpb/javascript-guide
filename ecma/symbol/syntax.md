# Symbols

Unique and immutable data type to be used as an identifier for object properties

## Reference
---

* [Symbol Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

## Syntax
---

```js
let sym = Symbol("foo")
console.log(sym)            //=> Symbol(foo)

//Global Symbol
let sym = Symbol.for("foo")
console.log(sym)            //=> Symbol(foo)

console.log(Symbol("foo") !== Symbol("foo"))         //=> true
console.log(Symbol.for("foo") !== Symbol.for("foo")) //=> false
```