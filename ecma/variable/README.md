# Variable

  - [Declarations](#declarations)
    - [Other languages](#other-languages)
    - [Keyword](#keyword)
    - [Reassignable](#reassignable)
    - [Scope](#scope)
  - [Automatic semicolon insertion (ASI)](#automatic-semicolon-insertion-asi)
  - [Dynamic Type](#dynamic-type)
  - [Weak Typing](#weak-typing)
  - [Case Sensitive](#case-sensitive)
  - [Identifier Pattern](#identifier-pattern)
  - [Multiple Declaration](#multiple-declaration)
  - [Hoisting](#hoisting)

## Declarations

---

| Keyword                                                                                       | Scope    | Reassignable | Mutable | Temporal Dead Zone |
| --------------------------------------------------------------------------------------------- | -------- | ------------ | ------- | ------------------ |
| [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) | Block    | No           | Yes\*   | Yes                |
| [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)     | Block    | Yes          | Yes     | Yes                |
| [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)     | Function | Yes          | Yes     | No                 |

### Other languages

C:
```c
int number = 10;
```

Python:
```py
number = 10
```

### Keyword

```js
var number = 10;
console.log(number); //=> 10
```

```js
let number = 10;
console.log(number); //=> 10
```

```js
const number = 10;
console.log(number); //=> 10
```

### Reassignable

```js
var number;
number = 10;
number = 100;
console.log(number); //=> 100
```

```js
let number;
number = 10;
number = 100;
console.log(number); //=> 100
```

```js
const number; // SyntaxError
const number = 10;
number = 100; // TypeError
```

```js
const numbers = [];
numbers.push(1);
console.log(numbers); //=> [ 1 ]
```

Reference:

- [Declarations \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Declarations)
- [Variable declaration: var, const, let \| Modern JavaScript Cheatsheet](https://github.com/mbeaudru/modern-js-cheatsheet#variable-declaration-var-const-let)
- [Variable \| You Don't Know JS: Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md#variables)

## Automatic semicolon insertion (ASI)

```js
const number = 10
console.log(number) //=> 10
```

## Dynamic Type

---

```js
let variable = 10;
console.log(variable); //=> 10
console.log(typeof variable); //=> number

variable = 'fulano';
console.log(variable); //=> 'fulano'
console.log(typeof variable); //=> string
```

## Weak Typing

---

```js
const x = 10;
const y = '5';
console.log(x - y); //=> 5
```

## Case Sensitive

---

```js
const number = 8;
const Number = 80;
const NUMBER = 800;
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
Tipagem dinâmica, fraca e implícita
You Don't Know JS: Up & Going https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md
Values & Types
Converting Between Types (coercion, implicitly coerce) https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md
-->
