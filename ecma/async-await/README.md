# Async/await

* [Async functions](#async-functions)
* [Await](#await)
* [Handling Errors](#handling-errors)
* [Promise.all](#promise.all)

## Async functions
---

```js
function sum(a, b) {
  return a + b
}

console.log(sum(1, 1))
console.log(sum(2, 2))
console.log(sum(3, 3))

//=>
// 2
// 4
// 6
```

```js
async function sumAsync(a, b) {
  return a + b
}

sumAsync(1, 1).then(res => console.log(res))
sumAsync(2, 2).then(res => console.log(res))
sumAsync(3, 3).then(res => console.log(res))

//=>
// 2
// 4
// 6
```

```js
function sum(a, b) {
  return a + b
}

async function sumAsync(a, b) {
  return a + b
}

console.log(sum(1, 1))
sumAsync(2, 2).then(res => console.log(res))
console.log(sum(3, 3))

//=>
// 2
// 6
// 4
```

## Await
---

```js
async function sumAsync(a, b) {
  return a + b
}

sumAsync(1, 1).then(res => console.log(res))
sumAsync(2, 2).then(res => console.log(res))
sumAsync(3, 3).then(res => console.log(res))

//=>
// 2
// 6
// 4
```

```js
async function sumAsync(a, b) {
  return a + b
}

async () => {
  const result = []
  result.push(await sumAsync(1, 1))
  result.push(await sumAsync(2, 2))
  result.push(await sumAsync(3, 3))
  console.log(result) //=> [ 2, 4, 6 ]
}
```

## Handling Errors
---

```js
async function subtraction(a, b) {
  const result = a - b
  if (result)
    return result
  else 
    throw new Error("Whoops!")
}

(async () => {
  try {
    const result = await subtraction('a', 1)
    console.log(result)
  } catch(err) {
    console.log(err)
  }
})()

//=> Error: Whoops!
//    at subtraction (<anonymous>:6:11)
//    at <anonymous>:11:26
//    at <anonymous>:16:3
```

## Promise.all
---

```js
async function sumAsync(a, b) {
  return a + b
}

(async () => {
  const promises = [
    sumAsync(1, 1),
    sumAsync(2, 2),
    sumAsync(3, 3)
  ]
  const result = await Promise.all(promises)
  console.log(result) //=> [ 2, 4, 6 ]
})()
```

## Demo
---

```js
async function getJSON(url) {
  const response = await fetch(url)
  const json = await response.json()
  return json
}

(async () => {
  const cep = await getJSON('https://viacep.com.br/ws/01001000/json/')
  console.log(cep.localidade) //=> São Paulo
})()

## Reference
---

* [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Async functions - making promises friendly](https://developers.google.com/web/fundamentals/primers/async-functions)
* [Promises, async/await](https://javascript.info/async-await)