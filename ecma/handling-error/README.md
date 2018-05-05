# Handling Error

* [Throwing a error (`throw`)](#throwing-a-generic-error-throw)
* [Handling a specific error (`try...catch`, `try...finally`, `try...catch...finally`)](#handling-a-specific-error-trycatch-tryfinally-trycatchfinally)
* [Custom Error Types](#custom-error-types)
* [Handling a specific error](#handling-a-specific-error)

## Throwing a error (throw)
---

```js
function summation(...numbers){
  hasNaN = numbers.some((number) => Number.isNaN(parseInt(number)))
  if(hasNaN)
    throw "Contains NaN"
  return numbers.reduce((addition, number) => addition + number)
}
```

```js
function summation(...numbers){
  hasNaN = numbers.some((number) => Number.isNaN(parseInt(number)))
  if(hasNaN)
    throw Error("Contains NaN")
  return numbers.reduce((addition, number) => addition + number)
}
```

Reference:
* [Error Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Handling a specific error (try...catch, try...finally, try...catch...finally)
---

```js
try {
  console.log(summation(1))
  console.log(summation(1, 'a'))
  console.log(summation(1, 2, 3))
  console.log(summation(1, 2, 3, 4, 5))
} catch(e ){
  console.log(e) // "Contains NaN"
} finally {
  console.log("Error")
}
```

Reference:
* [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

## Custom Error Types
---

```js
var ContainNaNError = function(message){
  this.name = 'containNaNError'
  this.message = (message||'')
}

function summation(...numbers){
  hasNaN = numbers.some((number) => Number.isNaN(parseInt(number)))
  if(hasNaN)
    throw new ContainNaNError("Contains NaN")
    // throw new Error('ContainNaNError') // Throwing a generic error
  return numbers.reduce((addition, number) => addition + number)
}

try{
  console.log(summation(1))
  console.log(summation(1, 'a'))
  console.log(summation(1, 2, 3))
  console.log(summation(1, 2, 3, 4, 5))
}catch(e){
  console.log(e.name+': '+e.message)
}
```

## Handling a specific error
---

```js
try{
  console.log(summation(1))
  console.log(summation(1, 'a'))
  console.log(summation(1, 2, 3))
  console.log(summation(1, 2, 3, 4, 5))
}catch(e){
  if (e instanceof ContainNaNError)
    console.log(e.name+': '+e.message)
}
```
