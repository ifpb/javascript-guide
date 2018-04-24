# Statements and Declarations

* [Control flow](#): `block`, `break`, `continue`, `empty`, `if...esle`, `switch`, `throw`, `try...catch`)
* [Iterations](#): `do...while`, `for`, `for...in`, `for...of`, `while`, `do...while`

<!-- * Others: `debugger`, `export`, `import`, `label`(#)
* Declarations: `var`, `let`, `const`
* Functions and classes: `function`, `function*`, `return`, `class` -->

## Control flow (block, break, continue, empty, if...esle, switch, throw, try...catch)
---

<!-- 
TODO
# # #
 # #
# #
 #

continue & break 
-->

### if...else

```js
let number = 10
let result

// does not executes: false, 0, "", null, undefined, NaN
if(number < 0) {
  result = "menor que zero"
} else if (number > 0) {
  result = "maior que zero"
} else {
  result = "igual a zero"
}

console.log(result)
```

### switch

```js
let number1 = 10
let number2 = 10
let operator = '+' // (+, -, *, /)
let result

switch(operator) { // strict comparison
  case 'add':
  case '+':
    result = number1 + number2
    break
  case '-':
    result = number1 - number2
    break
  case '*':
    result = number1 * number2
    break
  case '/':
    result = number1 / number2
    break
  default:
    result = 0
}

console.log(result)
```

## Iterations (do...while, for, for...in, for...of, while)
---

### for

```js
for(let flag = 0; flag < 100; flag++){
    console.log(flag)
}
```

```js
let result = ''

for(let flag = 0; flag < 100; flag++){
    result += (flag < 10)? '0' + flag + ' ' : flag + ' '
    if((flag + 1) % 10 == 0)
      result += '\n'
}

console.log(result)
```

### for...in: Iterates over the enumerable properties of an object

```js
let numbers = [1, 2, 3, 4]

for(let index in numbers){
  console.log(index)
}

// numbers['number'] = 10
```

```js
let numbers = [1, 2, 3, 4]

// numbers['number'] = 10

for(let index in numbers){
  console.log(`${index} -> ${numbers[index]}`)
}
```

### for...of: Iterates over iterable objects (including arrays, array-like objects, iterators and generators)

```js
let numbers = [1, 2, 3, 4]
for(let number of numbers){
  console.log(number)
}
```

```js
let numbers = [1, 2, 3, 4]

for(let [index, number] of numbers.entries()){
  console.log(`${index} => ${number}`)
}

// numbers['number'] = 10
```

### for...of Object.keys

```js
let student = {
  "id": 1,
  "name": "fulano",
  "email": "fulano@gmail.com"
}

for(let index of Object.keys(student)){
  console.log(student[index])
}
```

### for...of Object.values

```js
let student = {
  "id": 1,
  "name": "fulano",
  "email": "fulano@gmail.com"
}

for(let values of Object.values(student)){
  console.log(values)
}
```

### for...of Object.entries

```js
let student = {
  "id": 1,
  "name": "fulano",
  "email": "fulano@gmail.com"
}

for(const [key, value] of Object.entries(student)){
  console.log(key)
  console.log(value)
}
```

### while

```js
let result = ""

while(result.length < 4){
  result += 'x'
  console.log(result)
}
```

### do...while

```js
let result = ""
do {
  result += 'x'
  console.log(result)
} while(result.length < 4)
```

<!-- ## Others (debugger, export, import, label)
---

## Declarations (var, let, const)
---

## Functions and classes (function, function*, return, class)
--- -->