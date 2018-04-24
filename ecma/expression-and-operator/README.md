# [Expression and Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
  
<!-- * [Primary expressions](#primary-expressions-this-function-class-function-yield-yield---abci--): `this`, `function`, `class`, `function*`, `yield`, `yield*`, `[]`, `{}`, `/ab+c/i`, `( )` -->
* [Left-hand-side expressions](#left-hand-side-expressions-objectproperty-new-newtarget-super-obj): `object.property`, `new`, `new.target`, `super`, `...obj`
* [Increment and decrement](#increment-and-decrement-a-a-a-a): `A++`, `A--`, `++A`, `--A`
* [Unary operators](#unary-operators-delete-void-typeof-----): `delete`, `void`, `typeof`, `+`, `-`, `~`, `!`
* [Arithmetic operators](#arithmetic-operators-------): `+`, `-`, `*`, `/`, `%`, `**`
* [Relational operators](#relational-operators-in-instanceof----): `in`, `instanceof`, `<`, `<=`, `>`, `>=`
* [Equality operators](#equality-operators----): `==`, `!=`, `===`, `!==`
* [Bitwise shift operators](#bitwise-shift-operators-): `<<`, `>>`, `>>>`
* [Binary bitwise operators](#binary-bitwise-operators---): `&`, `|`, `^`
* [Binary logical operators](#binary-logical-operators--): `&&`, `||`
* [Conditional operator](#conditional-ternary-operator-condition--iftrue--iffalse): `? :`
* [Assignment operators](#assignment-operators-----------): `=`, `*=`, `/=`, `%=`, `+=`, `-=`, `<<=`, `>>=`, `>>>=`, `&=`, `^=`, `|=`
* [Destructuring Assignment](#destructuring-assignment)
* [Comma operator](#comma-operator-): `,`

<!-- ## Primary expressions (this, function, class, function*, yield, yield*, [], {}, /ab+c/i, ( )) 
--- -->

## Left-hand-side expressions (object.property, new, new.target, super, ...obj)
---

```js
let obj = {number: 10}
console.log(obj.number)       //=> 10

let numbers = [1, 2, 3]
// spread operator
console.log(...numbers, 4, 5) //=> [1, 2, 3, 4, 5]
```

## Increment and decrement (A++, A--, ++A, --A)
---

```js
let number = 10

console.log(number++)      //=> 10
console.log(++number)      //=> 12
console.log(number--)      //=> 12
console.log(--number)      //=> 10
```

## Unary operators (delete, void, typeof, +, -, ~, !)
---

```js
let numbers = [1, 2, 3]
console.log(numbers)        //=> [ 1, 2, 3 ]

delete numbers[1]
console.log(numbers)        //=> [ 1, , 3 ]

console.log(typeof numbers) //=> object

let number = 15
console.log(number)  //=>  15
console.log(-number) //=> -15
console.log(+number) //=>  15 01111111111111111111111111111111

// Bitwise NOT
console.log(~number) //=> -16 10000000000000000000000000000000

// Logical NOT
console.log(!number) //=> false
```

## Arithmetic operators (+, -, *, /, %, **)
---

```js
console.log(10 + 3)             //=> 13
console.log(true + 3)           //=> 4
console.log(10 - 3)             //=> 7
console.log(1.4 - 1.2)          //=> 0.19999999999999996 (IEEE 754)
console.log(10 * 3)             //=> 30
console.log(10 / 3)             //=> 3.3333333333333335
console.log(parseInt(10 / 3))   //=> 3
console.log(Math.trunc(10 / 3)) //=> 3 - Integer division
console.log(10 % 3)             //=> 1
console.log(10 ** 3)            //=> 1000
console.log(Math.pow(10, 3))    //=> 1000
```

## Relational operators (in, instanceof, <, <=, >, >=)
---

```js
let numbers = [1, 2, 3]

console.log(0 in numbers)                   //=> true
console.log(1 in numbers)                   //=> true
console.log(3 in numbers)                   //=> false
console.log("value" in {value: 1})          //=> true
console.log("PI" in Math)                   //=> true
console.log("" instanceof String)           //=> false
console.log(new String() instanceof String) //=> true
console.log(1 < 10)                         //=> true
console.log(1 <= 10)                        //=> true
console.log(10 > 1)                         //=> true
console.log(10 >= 1)                        //=> true
```

## Equality operators (==, !=, ===, !==)
---

```js
//  false == false, 0, "0", "", [], [0]

//  Equality: type–converting comparisons
console.log(1 == 1)                 //=> true
console.log(1 == "1")               //=> true
console.log(1 == "1a")              //=> false
console.log(1 == true)              //=> true
console.log(0 == false)             //=> false
console.log(false == "")            //=> true
console.log(false == [])            //=> true
console.log(false == null)          //=> false
console.log(false == undefined)     //=> false
console.log({"value":1} == {"value":1}) //=> false
let obj = {"value":1}
console.log(obj == obj)             //=> true
console.log(undefined == undefined) //=> true
console.log(null == null)           //=> true
console.log(NaN == NaN)             //=> false
console.log(Object.is(NaN, NaN))    //=> true
console.log(Object.is([], []))      //=> false / Not comapre Array
console.log(Object.is({}, {}))      //=> false / Not comapre Object

//  Identity/strict equality: strict and type–converting comparisons
console.log(1 === 1)     //=> true
console.log(1 === "1")   //=> false
console.log("1" === "1") //=> true
```

Reference: [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators), [Equality Comparisons and Sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness), [JavaScript Equality Table](http://dorey.github.io/JavaScript-Equality-Table/)

## Bitwise shift operators (<<, >>, >>>)
---

```js
//  Bitwise operators treat their operands as a sequence of 32 bits
//  -(2 ** 32)  até 2 ** 31 - 1
//  -2147483648 até 2147483647

console.log( 9 )      //=> 00000000000000000000000000001001   9
console.log( 9 <<  2) //=> 00000000000000000000000000100100  36
console.log( 9 >>  2) //=> 00000000000000000000000000000010   2
console.log( 9 >>> 2) //=> 00000000000000000000000000000010   2
console.log(-9 )      //=> 11111111111111111111111111110110  -9
console.log(-9 >>  2) //=> 11111111111111111111111111111101  -3
console.log(-9 >>> 2) //=> 00111111111111111111111111111101  1073741821
```

### Encoding Mantis green ARGB - rgba(116, 195, 101, 0)

```js
const alfa  = 0
const red   = 116
const green = 195
const blue  = 101
const color = (alfa & 0xff) << 24 | (red & 0xff) << 16 | (green & 0xff) << 8 | (blue & 0xff)

// 00000000000000000000000011111111 (0)
// 00000000000000000000000011111111 (0xff)
// 00000000000000000000000000000000 (& 0xff)
// 11111111000000000000000000000000 (<< 24)

// 00000000000000000000000001110100 (116)
// 00000000000000000000000011111111 (0xff)
// 00000000000000000000000001110100 (& 0xff)
// 00000000011101000000000000000000 (<< 16)

// 00000000000000000000000011000011 (195)
// 00000000000000000000000011111111 (0xff)
// 00000000000000000000000011000011 (& 0xff)
// 00000000000000001100001100000000 (<< 8)

// 00000000000000000000000001100101 (101)
// 00000000000000000000000011111111 (0xff)
// 00000000000000000000000001100101 (& 0xff)

// 11111111000000000000000000000000 (alfa)
// 00000000011101000000000000000000 (red)
// 00000000000000001100001100000000 (green)
// 00000000000000000000000001100101 (blue)
// 11111111011101001100001101100101 (|) 
// 0x74C365 (alfa 100%)
```

Reference:
* [RGBA color space](https://en.wikipedia.org/wiki/RGBA_color_space)

### Decoding Mantis green ARGB - #74C365
```js
const color = 0x74C365;
// 11111111011101001100001101100101 (alfa 100%)

const alfa  = (color >>> 24) & 0xff
// 11111111011101001100001101100101 
// 00000000000000000000000011111111 (>>> 24)
// 00000000000000000000000011111111 (0xff)
// 00000000000000000000000000000000 (& 0xff)
// 255

const red   = (color >> 16) & 0xff
// 00000000011101001100001101100101
// 00000000000000000000000001110100 (>> 16)
// 00000000000000000000000011111111 (0xff)
// 00000000000000000000000001110100 (& 0xff)
// 116

const green = (color >>  8) & 0xff
// 00000000011101001100001101100101
// 00000000000000000111010011000011 (>> 8)
// 00000000000000000000000011111111 (0xff)
// 00000000000000000000000011000011 (& 0xff)
// 195

const blue  = color & 0xff
// 00000000011101001100001101100101
// 00000000000000000000000011111111 (0xff)
// 00000000000000000000000001100101 (& 0xff)
// 101
```

## Binary bitwise operators (&, |, ^)
---

```js
console.log(9     )   //=> 00000000000000000000000000001001   9
console.log(14    )   //=> 00000000000000000000000000001110  14
console.log(14 & 9)   //=> 00000000000000000000000000000100   8
console.log(14 | 9)   //=> 00000000000000000000000000001111  15
console.log(14 ^ 9)   //=> 00000000000000000000000000000101   7
```

## Binary logical operators (&&, ||)
---

```js
//  false == false, 0, "", null, undefined, NaN

console.log(true  && true )     // t && t returns true
console.log(true  && false)     // t && f returns false
console.log(false && true )     // f && t returns false
console.log(false && (3 == 4))  // f && f returns false
console.log("Cat" && "Dog")     // t && t returns "Dog"
console.log(true  && "Cat")     // f && t returns "Cat"
console.log("Cat" && true )     // t && f returns true
console.log(false && "Cat")     // f && t returns false
console.log("Cat" && false)     // t && f returns false
console.log(1     && 2    )     // t && t returns 2
console.log(true  && 2    )     // f && t returns 2
console.log(1     && true )     // t && f returns true
console.log(false && 2    )     // f && t returns false
console.log(1     && false)     // t && f returns false
console.log(""    && false)     // returns ""
console.log(false && ||   )     // returns false
console.log(true  || true)      // t || t returns true
console.log(false || true)      // f || t returns true
console.log(true  || false)     // t || f returns true
console.log(false || (3 == 4))  // f || f returns false
console.log("Cat" || "Dog")     // t || t returns "Cat"
console.log(false || "Cat")     // f || t returns "Cat"
console.log("Cat" || false)     // t || f returns "Cat"
console.log(""    || false)     // t || f returns false
console.log(false || "")        // f || t returns ""
console.log(false && true  || true)   //=> true
console.log(false && (true  || true)) //=> false

let variable
let temp = variable || 10
console.log(temp) //=> 10

let variable = 1
let temp = variable || 10
console.log(temp) //=> 1
```

## Conditional (ternary) operator (condition ? ifTrue : ifFalse)
---

```js
console.log(true ? 'true' : 'false') //=> 'true'
```

## Assignment operators (=, *=, /=, %=, +=, -=, <<=, >>=, >>>=, &=, ^=, |=)
---

## Destructuring Assignment
---

```js
// [a, b] = [1, 2] / Array Matching
let [a, b] = [8, 80]
console.log(a) //=> 8
console.log(b) //=> 80

let [a, , b] = [8, 80, 800] // Ignoring some values
console.log(a) //=> 8
console.log(b) //=> 80

let a = 1 // Swapping variables
let b = 3
[a, b] = [b, a]
console.log(a) //=> 3
console.log(b) //=> 1

let [number, string] = [8, 'fulano']
console.log(number) //=> 8
console.log(string) //=> 'fulano'

let [ip, mask = '255.255.255.0'] = ['192.168.0.2'] // Fail-Soft Destructuring
console.log(ip)     //=> '192.168.0.2'
console.log(mask)   //=> '255.255.255.0'

let [ip, mask = '255.255.255.0'] = ['192.168.0.2', '255.255.0.0']
console.log(ip)     //=> '192.168.0.2'
console.log(mask)   //=> '255.255.0.0'

// {a, b} = {a:1, b:2} / Object Matching
let {ip, mask} = {ip: '192.168.0.2', mask: '255.255.255.0'}
console.log(ip)     //=> '192.168.0.2'
console.log(mask)   //=> '255.255.255.0'
```

Reference: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Deep Matching
---

```js
let {ip: ipAdd, mask: maskAdd} = {ip: '192.168.0.2', mask: '255.255.255.0'}
console.log(ipAdd)   //=> '192.168.0.2'
console.log(maskAdd) //=> '255.255.255.0'

let {mask: maskAdd, ip: ipAdd} = {ip: '192.168.0.2', mask: '255.255.255.0'}
console.log(ipAdd)   //=> '192.168.0.2'
console.log(maskAdd) //=> '255.255.255.0'

let {mask: maskAdd, ip: ipAdd, ip: ipAdd2} = {ip: '192.168.0.2', mask: '255.255.255.0'}
console.log(ipAdd)   //=> '192.168.0.2'
console.log(ipAdd2)  //=> '192.168.0.2'
console.log(maskAdd) //=> '255.255.255.0'
```

## Comma operator (,)
---

```js
let x, y
```