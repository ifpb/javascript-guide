# Variable

* [Declarations](#declaration): [var](#var), [let](#let), [const](#const)
* [Multiple Declaration](#multiple-declaration)
* [Dynamic Type](#dynamic-type)
* [Case Sensitive](#case-sensitive)
* [Identifier Pattern](#identifier-pattern)
* [Hoisting](#hoisting)

## Declaration
--- 

### var

```js
var number;
var number      // Automatic semicolon insertion (ASI)
var number = 10 // int number = 10; (C language)
```

### let

```js
let number = 10
console.log(number) //=> 10
```

### const

```js
const NUMBER = 10
NUMBER = 100        // TypeError
console.log(NUMBER) //=> 10
```

Reference:
  * [Declarations \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Declarations)

## Multiple Declaration
---

```js
var x, y, z
console.log(x) //=> undefined
console.log(y) //=> undefined
console.log(z) //=> undefined
```

```js
var a = 1, b = 2, c = 3
console.log(a); //=> 1
console.log(b); //=> 2
console.log(c); //=> 3
```

## Dynamic Type
---

```js
let number = 10
console.log(number)        //=> 10
console.log(typeof number) //=> number

number = 'fulano'
console.log(typeof number) //=> string
console.log(number)        //=> 'fulano'
```

## Case Sensitive
---

```js
let number = 8
let NUmber = 80
```

## Identifier Pattern
---

```js
let 0number  //SyntaxError (^\W)
let %number  //SyntaxError (^\W)
let var      //SyntaxError (keyword)
let function //SyntaxError (keyword)
let number
let _number
let $number
```

Reference:
  * [Variables \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variables)

## Hoisting
---

```js
nome = 'fulano'
console.log(nome)      //=> 'fulano'
```

```js
console.log(outroNome) // ReferenceError
outroNome = 10
```

```js
console.log(outroNome) // undefined
let outroNome = 10
```

Reference:
  * [Variable hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variable_hoisting)

<!-- TODO
https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md
Values & Types 
Converting Between Types (coercion, implicitly coerce) https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md
-->