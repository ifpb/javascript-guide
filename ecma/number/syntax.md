# Number

* [Literal 15](#literal-15)
* [Pattern](#pattern)
* [IEEE 754](#ieee-754)

## Literal 15
---

```js
console.log(15)     // decimal
console.log(017)    // octal
console.log(0o17)   // octal ecma6
console.log(0O17)   // octal
console.log(0b1111) // binary ecma6
console.log(0B1111) // binary ecma6
console.log(0xf)    // hexa
console.log(0Xf)    // hexa
console.log(0XF)    // hexa
console.log(-15)    // negative
```

## Pattern
---

`[(+|-)][digits][.digits][(E|e)[(+|-)]digits]`

![Number](http://json.org/number.gif)

Reference: [JSON ORG](http://json.org)

```js
console.log(3.1)      //=> 3.1
console.log(3.14)     //=> 3.14
console.log(-3.14)    //=> -3.14
console.log(.14)      //=> 0.14
console.log(-.14)     //=> -0.14
console.log(3.1E-12)  //=> 0.0000000000031
console.log(3.1e+12)  //=> 3100000000000
console.log(-3.1e+12) //=> -3100000000000
```

## IEEE 754
---

```js
console.log(1.4 - 1.2) //=> 0.19999999999999996
```

## Max Safe Integer
---

```js
console.log(Number.MAX_SAFE_INTEGER)     //=> 9007199254740991 (2**53-1)
console.log(Number.MAX_SAFE_INTEGER + 1) //=> 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2) //=> 9007199254740992
```

[BigInt](https://github.com/tc39/proposal-bigint)
```js
const max = BigInt(Number.MAX_SAFE_INTEGER)
console.log(max)      //=> 9007199254740991n
console.log(max + 1n) //=> 9007199254740992n
console.log(max + 2n) //=> 9007199254740992n

const max = 2n ** (64n - 1n) - 1n
console.log(max)      //=> 9223372036854775807n
console.log(max + 1n) //=> 9223372036854775808n
```

## Reference
---

* [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* [Numeric Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_literals)
* [Integers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Integers)
* [Floating](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Floating-point_literals)
* [Here is what you need to know about JavaScript’s Number type](https://medium.com/dailyjs/javascripts-number-type-8d59199db1b6)
* [BigInt: arbitrary-precision integers in JavaScript](https://developers.google.com/web/updates/2018/05/bigint)