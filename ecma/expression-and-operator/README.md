# [Expression and Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
  
* [Primary expressions](#primary-expressions)
* [Left-hand-side expressions](#left-hand-side-expressions)
* [Increment and decrement](#increment-and-decrement)
* [Unary operators](#unary-operators)
* [Arithmetic operators](#arithmetic-operators)
* [Relational operators](#relational-operators)
* [Equality operators](#equality-operators)
* [Bitwise shift operators](#bitwise-shift-operators)
* [Binary bitwise operators](#binary-bitwise-operators)
* [Binary logical operators](#binary-logical-operators)
* [Conditional operator](#conditional-operator-ternary)
* [Assignment operators](#assignment-operators)
* [Comma operator](#comma-operator)
* [Recap](#recap)

## [Primary expressions]()
---

### Celsius to Fahrenheit conversion

<!-- 
\begin{align*}
C = \frac{F - 32}{1.8}
\end{align*}
 -->
![](assets/celsius2fahrenheit.png)

#### Option 1

```js
let fahrenheit = 50
let celsius = fahrenheit - 32 / 1.8
console.log(celsius) //=> 32.2
``` 

![](assets/celsius2fahrenheit1.svg)

#### Option 2

```js
// grouping operator
let fahrenheit = 50
let celsius = (fahrenheit - 32) / 1.8
console.log(celsisu) //=> 10
```

![](assets/celsius2fahrenheit2.svg)

References:
* [Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
* [Abstract syntax trees on Javascript](https://medium.com/@jotadeveloper/abstract-syntax-trees-on-javascript-534e33361fc7)
* [Esprima](http://esprima.org/demo/parse.html#)
* [Javascript AST Visualizer](https://resources.jointjs.com/demos/javascript-ast)
* [AST Explorer](https://astexplorer.net)

## [Left-hand-side expressions]()
---

```js
// object.property
let obj = {number: 10}
console.log(obj.number)       //=> 10
```

```js
// spread operator
let numbers = [1, 2, 3]
console.log(...numbers, 4, 5) //=> [1, 2, 3, 4, 5]
```

## [Increment and decrement]()
---

```js
// postfix increment
let number = 10
console.log(number++)      //=> 10
```

```js
// prefix increment
let number = 10
console.log(++number)      //=> 11
```

```js
// postfix decrement
let number = 10
console.log(number--)      //=> 10
```

```js
// prefix decrement
let number = 10
console.log(--number)      //=> 9
```

## [Unary operators]()
---

```js
// delete operator
let numbers = [1, 2, 3]
console.log(numbers)        //=> [ 1, 2, 3 ]

delete numbers[1]
console.log(numbers)        //=> [ 1, , 3 ]
```

```js
// typeof operator
let number = 1
console.log(typeof number) //=> number

let name = 'Lorem ipsum'
console.log(typeof name)    //=> string

let numbers = [1, 2, 3]
console.log(typeof numbers) //=> object
```

```js
// unary plus operator
let number = "15"
console.log(number)  //=> "15"
console.log(+number) //=>  15 
```

```js
// unary negation operator
let number = -15
console.log(number)  //=> -15 11111111111111111111111111110001
console.log(-number) //=>  15 00000000000000000000000000001111
```

```js
// bitwise not
let number = 16
console.log(number)  //=>  16 00000000000000000000000000010000
console.log(~number) //=> -17 11111111111111111111111111101111
```

```js
// logical not
let number = 16
console.log(!number) //=> false
```

## [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
---

```js
// addition operator
console.log(10 + 3)             //=> 13
console.log(true + 3)           //=> 4
```

```js
// subtraction operator
console.log(10 - 3)             //=> 7
console.log(1.4 - 1.2)          //=> 0.19999999999999996 (IEEE 754)
```

```js
// multiplication operator
console.log(10 * 3)             //=> 30
```

```js
// division operator
console.log(10 / 3)             //=> 3.3333333333333335
console.log(parseInt(10 / 3))   //=> 3 - Integer division
console.log(Math.trunc(10 / 3)) //=> 3 - Integer division
```

```js
// remainder operator
console.log(10 % 3)             //=> 1
```

```js
// exponentiation operator
console.log(10 ** 3)            //=> 1000  Math.pow(10, 3)
```

## [Relational operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Relacional_Operators)
---

```js
// in operator
let numbers = [1, 2, 3]
console.log(0 in numbers)                   //=> true
console.log(1 in numbers)                   //=> true
console.log(3 in numbers)                   //=> false
console.log("value" in {value: 1})          //=> true
console.log("PI" in Math)                   //=> true
```

```js
// instanceof operator
console.log("" instanceof String)           //=> false
console.log(new String() instanceof String) //=> true
```

```js
// less than operator
console.log(1 < 10)                         //=> true
```

```js
// less than or equal operator 
console.log(1 <= 10)                        //=> true
```

```js
// greater than operator
console.log(10 > 1)                         //=> true
```

```js
// greater than or equal operator 
console.log(10 >= 1)                        //=> true
```

## [Equality operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality_Operators)
---

> false == false, 0, "0", "", [], [0]

```js
// equality operator: type–converting comparisons
console.log(1 == 1)        //=> true
console.log(1 == "1")      //=> true
console.log(1 == "1a")     //=> false
console.log(1 == true)     //=> true
console.log(0 == false)    //=> true
```

```js
// inequality operator
console.log(1 != "a")     //=> true
console.log(1 != false)   //=> true
console.log(1 != true)    //=> false
```

```js
// identity/strict equality: strict and type–converting comparisons
console.log(1 === 1)       //=> true
console.log(1 === "1")     //=> false
console.log("1" === "1")   //=> true
```

```js
// non-identity
console.log(1 !== "1")     //=> true
console.log('' !== true)   //=> true
console.log(1 !== 1)       //=> false
```

References: 
* [Other comparations](comparations.md)
* [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
* [Equality Comparisons and Sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
* [JavaScript Equality Table](http://dorey.github.io/JavaScript-Equality-Table/)

## [Bitwise shift operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
---

> Bitwise operators treat their operands as a sequence of 32 bits<br>
> -(2 ** 32) to 2 ** 31 - 1<br>
> -2147483648 to 2147483647

```js
// left shitf operator - each step means "multiply by two"
console.log( 9 )      //=> 00000000000000000000000000001001   9
console.log( 9 <<  2) //=> 00000000000000000000000000100100  36
```

```js
// sign-propagating right shift operator - each step means "divide by two"
console.log( 9 )      //=> 00000000000000000000000000001001   9
console.log( 9 >>  2) //=> 00000000000000000000000000000010   2
console.log(-9 )      //=> 11111111111111111111111111110110  -9
console.log(-9 >>  2) //=> 11111111111111111111111111111101  -3
```

```js
// zero-fill right shift operator
console.log( 9 )      //=> 00000000000000000000000000001001   9
console.log( 9 >>> 2) //=> 00000000000000000000000000000010   2
console.log(-9 )      //=> 11111111111111111111111111110110  -9
console.log(-9 >>> 2) //=> 00111111111111111111111111111101  1073741821
```

> Example: [ARGB](argb.md)

## [Binary bitwise operators]()
---

```js
// bitwise and operator
console.log(9)        //=> 00000000000000000000000000001001   9
console.log(14)       //=> 00000000000000000000000000001110  14
console.log(14 & 9)   //=> 00000000000000000000000000000100   8
```

```js
// bitwise or operator
console.log(9)        //=> 00000000000000000000000000001001   9
console.log(14)       //=> 00000000000000000000000000001110  14
console.log(14 | 9)   //=> 00000000000000000000000000001111  15
```

```js
// bitwise xor operator
console.log(9)        //=> 00000000000000000000000000001001   9
console.log(14)       //=> 00000000000000000000000000001110  14
console.log(14 ^ 9)   //=> 00000000000000000000000000000101   7
```

## [Binary logical operators]()
---

> false == false, 0, "", null, undefined, NaN

```js
// logical and operator
true && true   //=> true
true && 10     //=> 10
false && 10    //=> false
```

```js
// logical or operator
false || false //=> false
false || true  //=> true
false || 10    //=> 10
```

### Precedence
```js
// Logical AND > Logical OR
false && true || true)   //=> true
false && (true || true)) //=> false
```

### Value Default
```js
let variable
let temp = variable || 10
console.log(temp) //=> 10

let variable = 1
let temp = variable || 10
console.log(temp) //=> 1
```

> [Other examples](logical-operators.md)

## [Conditional operator (ternary)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
---

```js
// conditional operator
let number = 10
let kind = (number % 2 == 0) ? 'even' : 'odd'
console.log(kind) //=> 'even'
```

## [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
---

```js
// assign operator
let variable = 10
console.log(variable) //=> 10
```

Shorthand: `*=`, `/=`, `%=`, `+=`, `-=`, `<<=`, `>>=`, `>>>=`, `&=`, `^=`, `|=`

```js
// addition assignment operator
let variable = 10     // 10
variable += 1         // variable = variable + 1
console.log(variable) //=> 11
```

> [Destructuring Assignment](destructuring-assignment.md), [Deep Matching](deep-matching.md)

## [Comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator)
---

```js
// comma operator
let x, y
```

## Recap
---

### Groups

<table>
  <thead>
    <tr>
      <th>Operator type</th>
      <th>Operator</th>
      <th>Operator Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="12">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators">Arithmetic Operators</a>
      </td>
      <td>… + …</td>
      <td>Addition</td>
    </tr>
    <tr>
      <td>… / …</td>
      <td>Division</td>
    </tr>
    <tr>
      <td>… ** …</td>
      <td>Exponentiation</td>
    </tr>
    <tr>
      <td>… * …</td>
      <td>Multiplication</td>
    </tr>
    <tr>
      <td>… % …</td>
      <td>Remainder</td>
    </tr>
    <tr>
      <td>… - …</td>
      <td>Subtraction</td>
    </tr>
    <tr>
      <td>… ++</td>
      <td>Postfix Increment</td>
    </tr>
    <tr>
      <td>… --</td>
      <td>Postfix Decrement</td>
    </tr>
    <tr>
      <td>- …</td>
      <td>Prefix Decrement</td>
    </tr>
    <tr>
      <td>+ …</td>
      <td>Prefix Increment</td>
    </tr>
    <tr>
      <td>- …</td>
      <td>Unary negation</td>
    </tr>
    <tr>
      <td>+ …</td>
      <td>Unary plus</td>
    </tr>
    <tr>
      <td rowspan="13">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators">Assignment Operators</a>
      </td>
      <td>… += …</td>
      <td>Addition assignment</td>
    </tr>
    <tr>
      <td>… &= …</td>
      <td>Bitwise AND assignment</td>
    </tr>
    <tr>
      <td>… |= …</td>
      <td>Bitwise OR assignment</td>
    </tr>
    <tr>
      <td>… ^= …</td>
      <td>Bitwise XOR assignment</td>
    </tr>
    <tr>
      <td>… /= …</td>
      <td>Division assignment</td>
    </tr>
    <tr>
      <td>… **= …</td>
      <td>Exponentiation assignment</td>
    </tr>
    <tr>
      <td>… <<= …</td>
      <td>Left shift assignment</td>
    </tr>
    <tr>
      <td>… *= …</td>
      <td>Multiplication assignment</td>
    </tr>
    <tr>
      <td>… %= …</td>
      <td>Remainder assignment</td>
    </tr>
    <tr>
      <td>… >>= …</td>
      <td>Right shift assignment</td>
    </tr>
    <tr>
      <td>… = …</td>
      <td>Assignment</td>
    </tr>
    <tr>
      <td>… -= …</td>
      <td>Subtraction assignment</td>
    </tr>
    <tr>
      <td>… >>>= …</td>
      <td>Unsigned right shift assignment</td>
    </tr>
    <tr>
      <td rowspan="7">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators">Bitwise Operators</a>
      </td>
      <td>… & …</td>
      <td>Bitwise AND</td>
    </tr>
    <tr>
      <td>… << …</td>
      <td>Bitwise left shift</td>
    </tr>
    <tr>
      <td>~ …</td>
      <td>Bitwise NOT</td>
    </tr>
    <tr>
      <td>… | …</td>
      <td>Bitwise OR</td>
    </tr>
    <tr>
      <td>… >> …</td>
      <td>Bitwise right shift</td>
    </tr>
    <tr>
      <td>… >>> …</td>
      <td>Bitwise unsigned right shift</td>
    </tr>
    <tr>
      <td>… ^ …</td>
      <td>Bitwise XOR</td>
    </tr>
    <tr>
      <td rowspan="8">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">Comparison Operators</a>
      </td>
      <td>… == …</td>
      <td>Equality</td>
    </tr>
    <tr>
      <td>… != …</td>
      <td>Inequality</td>
    </tr>
    <tr>
      <td>… === …</td>
      <td>Identity</td>
    </tr>
    <tr>
      <td>… !== …</td>
      <td>Non-identity</td>
    </tr>
    <tr>
      <td>… > …</td>
      <td>Greater than</td>
    </tr>
    <tr>
      <td>… >= …</td>
      <td>Greater than or equal</td>
    </tr>
    <tr>
      <td>… < …</td>
      <td>Less than</td>
    </tr>
    <tr>
      <td>… <= …</td>
      <td>Less than or equal</td>
    </tr>
    <tr>
      <td rowspan="3">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators">Logical Operators</a>
      </td>
      <td>… && …</td>
      <td>Logical AND </td>
    </tr>
    <tr>
      <td>… || …</td>
      <td>Logical OR</td>
    </tr>
    <tr>
      <td>! …</td>
      <td>Logical NOT</td>
    </tr>
    <tr>
      <td>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">Conditional Operator</a>
      </td>
      <td>… ? … : …</td>
      <td>Conditional / Ternary</td>
    </tr>
    <tr>
      <td>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator">Comma Operator</a>
      </td>
      <td>… , …</td>
      <td>Comma / Sequence</td>
    </tr>
  </tbody>
</table>

### [Operators List](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

| Operator type | Operators |
|-|-|
| Primary expressions | `this`, `function`, `class`, `function*`, `yield`, `yield*`, `async function*`, `await`, `[]`, `{}`, `/ab+c/i`, `( )` |
| Left-hand-side expressions | `object.property` or `object["property"]`, `new`, `new.target`, `super`, `...obj` |
| Increment and decrement | `A++`, `A--`, `++A`, `--A` |
| Unary operators | `delete`, `void`, `typeof`, `+`, `-`, `~`, `!` |
| Arithmetic operators | `+`, `-`, `*`, `/`, `%`, `**` |
| Relational operators | `in`, `instanceof`, `<`, `<=`, `>`, `>=` |
| Equality operators | `==`, `!=`, `===`, `!==` |
| Bitwise shift operators | `<<`, `>>`, `>>>` |
| Binary bitwise operators | `&`, `|`, `^` |
| Binary logical operators | `&&`, `||` |
| Assignment operators | `=`, `*=`, `/=`, `%=`, `+=`, `-=`, `<<=`, `>>=`, `>>>=`, `&=`, `^=`, `|=`, `[a, b] = [1, 2]`, `{a, b} = {a:1, b:2}` |
| Conditional operator | ` (condition ? ifTrue : ifFalse)` |
| Comma operator | `,` |
