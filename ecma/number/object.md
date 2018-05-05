# [Number Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

* [Creating Number](#creating-number)
* [Number Object](#number-object)
  * Number 
    * Properties: [`MIN_SAFE_INTEGER`](#numberminsafeinteger), [`MAX_SAFE_INTEGER`](#numbermaxsafeinteger), [`MIN_VALUE`](#numberminvalue), [`MAX_VALUE`](#numbermaxvalue), [`POSITIVE_INFINITY`](#numberpositiveinfinity), [`NEGATIVE_INFINITY`](#numbernegativeinfinity), [`NaN`](#numbernan)
    * Methods: [`isInteger()`](#numberisinteger), [`isSafeInteger()`](#numberissafeinteger), [`isFinite()`](#numberisfinite), [`isNaN()`](#numberisnan), [`parseInt()`](#numberparseint), [`parseFloat()`](#numberparsefloat)
  * Number Instance
    * Methods: [`toString()`](#numberprototypetostring), [`toExponential()`](#numberprototypetoexponential)

## Creating Number
---

```js
// Primitive
let number = 15
console.log(number)          //=> 15
console.log(typeof number)   //=> number

// Number
let number = Number(15)
console.log(number)          //=> 15
console.log(typeof number)   //=> number

// OO
let number = new Number(15)
console.log(number)          //=> [Number: 15]
console.log(typeof number)   //=> object

let number = new Number(017)
console.log(number)          //=> [Number: 15]
console.log(typeof number)   //=> object
```

## Number Object
---

### NUMBER PROPERTIES

#### Number.MIN_SAFE_INTEGER

```js
console.log(Number.MIN_SAFE_INTEGER) //=> -9007199254740991 = -(2ˆ53 - 1)
```

#### Number.MAX_SAFE_INTEGER

```js
console.log(Number.MAX_SAFE_INTEGER) //=>  9007199254740991 =   2ˆ53 - 1
```

#### Number.MIN_VALUE

```js
console.log(Number.MIN_VALUE) //=> 5e-324
```

#### Number.MAX_VALUE

```js
console.log(Number.MAX_VALUE) //=> 1.7976931348623157e+308
```

#### Number.POSITIVE_INFINITY
```js
console.log(Number.POSITIVE_INFINITY) //=> Infinity
console.log(Infinity) //=> Infinity
console.log(Infinity + 1); //=> Infinity
console.log(Math.pow(10, 1000)); //=> Infinity
console.log(1 / Infinity); //=> 0
```

#### Number.NEGATIVE_INFINITY
```js
console.log(Number.NEGATIVE_INFINITY) //=> -Infinity
console.log(-Infinity) //=> -Infinity
console.log(Math.log(0)); //=> -Infinity
```

#### Number.NaN
```
console.log(Number.NaN) //=> NaN
console.log(NaN) //=> NaN
console.log(0/0) //=> NaN
```

### NUMBER METHODS

#### Number.isInteger()

```js
console.log(Number.isInteger(15)) //=> true
```

#### Number.isSafeInteger()

> -(2^53 - 1) and 2^53 - 1

```js
console.log(Number.isSafeInteger(15)) //=> true
```

#### Number.isFinite()

```js
console.log(Number.isFinite(Infinity)) //=> false
```

#### Number.isNaN()

```js
console.log(NaN == (0/0)) //=> false
console.log(Number.isNaN(0/0)) //=> true
console.log(Number.isNaN(parseInt(1))) //=> false
console.log(Number.isNaN(parseInt('1'))) //=> false
console.log(Number.isNaN(parseInt('1a'))) //=> false
console.log(Number.isNaN(parseInt('a1'))) //=> true
console.log(Number.isNaN(parseInt(true))) //=> true
```

#### Number.parseInt() / parseInt()

```js
console.log(parseInt(1))         //=> 1
console.log(parseInt('1'))       //=> 1
console.log(parseInt('1a'))      //=> 1

console.log(parseInt('a1'))      //=> NaN
console.log(parseInt(0/0))       //=> NaN
console.log(parseInt(true))      //=> NaN
console.log(parseInt(undefined)) //=> NaN
console.log(parseInt(null))      //=> NaN

console.log("15"+15)             //=> 1515
console.log(parseInt("15")+15)   //=> 30
console.log(parseInt("12F"))     //=> 12
console.log(parseInt("F12"))     //=> NaN
console.log(parseInt("F"))       //=> NaN
console.log(parseInt("F", 16))   //=> 15
```

#### Number.parseFloat() / parseFloat()

```js
console.log(parseFloat(1.1))    //=> 1.1
console.log(parseFloat('1.1'))  //=> 1.1
console.log(parseFloat('1.1a')) //=> 1.1
```

## NUMBER INSTANCES
---

#### Number.prototype.toString()

```js
console.log(15.toString(16))                  // SyntaxError
console.log(Number(15).toString(16))          //=> f
console.log(new Number(15).toString(16))      //=> f

let number = 15
console.log(number.toString(16))              //=> f

let number = Number(15)
console.log(number.toString(16))              //=> f

let number = new Number(15)
console.log(number.toString(16))              //=> f

console.log(Number(15).toString(2))           //=> 1111
console.log(Number(15).toString(8))           //=> 17
console.log(Number(15).toString(16))          //=> f
console.log(Number(15412341234).toString(32)) //=> ebabafi
```

#### Number.prototype.toExponential()

```js
console.log(Number(2222.22222).toExponential())

// Number.prototype.toFixed()
console.log(Number(2222.22222).toFixed())
console.log(Number(2222.22222).toFixed(1))

// Number.prototype.toPrecision()
console.log(Number(2.22222222).toPrecision(3))
console.log(Number(2222.22222).toPrecision(1))
console.log(Number(2222.22222).toPrecision(5))
```

## Reference
---

* [Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Literals)
* [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* [Integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Integers)
* [Float](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Floating-point_literals)