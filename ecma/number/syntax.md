# Number

## Reference
---

* [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* [Numeric Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_literals)
* [Integers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Integers)
* [Floating](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Floating-point_literals)

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