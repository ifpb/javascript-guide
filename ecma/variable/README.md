# Variable

- [Declarations](#declaration): [var](#var), [let](#let), [const](#const)
- [Automatic semicolon insertion (ASI)](#automatic-semicolon-insertion-asi)
- [Dynamic Type](#dynamic-type)
- [Case Sensitive](#case-sensitive)
- [Identifier Pattern](#identifier-pattern)
- [Multiple Declaration](#multiple-declaration)
- [Hoisting](#hoisting)

## Declaration

---

| Keyword                                                                                       | Scope    | Reassignable | Mutable | Temporal Dead Zone |
| --------------------------------------------------------------------------------------------- | -------- | ------------ | ------- | ------------------ |
| [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) | Block    | No           | Yes\*   | Yes                |
| [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)     | Block    | Yes          | Yes     | Yes                |
| [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)     | Function | Yes          | Yes     | No                 |

### var

```js
// int number = 10; (C language)
// number = 10      (Pyton language)
var number = 10;
console.log(number); //=> 10
```

```js
var number;
number = 10;
console.log(number); //=> 10
```

### let

```js
let number = 10;
console.log(number); //=> 10
```

```js
let number;
number = 10;
console.log(number); //=> 10
```

```js
let number = 10;
console.log(number); //=> 10

let number = 10; // SyntaxError: Identifier 'number' has already been declared
```

### const

```js
const number = 10;
console.log(number); //=> 10
```

```js
const number = 10;
number = 100; // TypeError
```

Reference:

- [Declarations \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Declarations)
- [Variable declaration: var, const, let \| Modern JavaScript Cheatsheet](https://github.com/mbeaudru/modern-js-cheatsheet#variable-declaration-var-const-let)
- [Variable \| You Don't Know JS: Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md#variables)

## Automatic semicolon insertion (ASI)

```js
const number = 10;
console.log(number); //=> 10
```

## Dynamic Type

---

```js
let number = 10;
console.log(number); //=> 10
console.log(typeof number); //=> number

number = 'fulano';
console.log(typeof number); //=> string
console.log(number); //=> 'fulano'
```

## Case Sensitive

---

```js
const number = 8;
const NUmber = 80;
```

## Identifier Pattern

---

```js
const 0number  //=> SyntaxError (^\W)
const %number  //=> SyntaxError (^\W)
const var      //=> SyntaxError (keyword)
const function //=> SyntaxError (keyword)
const number
const _number
const $number
```

Reference:

- [Variables \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variables)

## Multiple Declaration

---

```js
let x, y, z;
console.log(x); //=> undefined
console.log(y); //=> undefined
console.log(z); //=> undefined
```

```js
const a = 1,
  b = 2,
  c = 3;
console.log(a); //=> 1
console.log(b); //=> 2
console.log(c); //=> 3
```

## Hoisting

---

```js
name = 'fulano';
console.log(name); //=> 'fulano'
```

```js
console.log(name); //=> ReferenceError: name is not defined
name = 10;
```

```js
console.log(name); //=> undefined
var name = 10;
```

```js
console.log(name); //=> ReferenceError: name is not defined
let name = 10;
```

Reference:

- [Variable hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variable_hoisting)

<!-- TODO
You Don't Know JS: Up & Going https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md
Values & Types
Converting Between Types (coercion, implicitly coerce) https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md
-->
