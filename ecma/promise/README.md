# Promise

* [Concept](#concept)
* [Handling Errors](#handling-errors)

## Concept
---

![](https://mdn.mozillademos.org/files/15911/promises.png)
Reference: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promise states:
* pending
* fulfilled
* rejected

### Example
```js
const condition = true

const p = new Promise((resolve, reject) => {
  if (condition)
    resolve('Valid promise')
  else
    reject('Invalid promise')
})

p.then(r => console.log(r))
//=> Valid promise
```

## Handling Errors
---

```js
const condition = true

const promise = new Promise((resolve, reject) => {
  if (condition)
    resolve('Valid promise')
  else
    reject('Invalid promise')
})

promise
  .then(r => console.log(r))
  .catch(r => console.log(r))
//=> Valid promise
```

```js
const condition = false

const promise = new Promise((resolve, reject) => {
  if (condition)
    resolve('Valid promise')
  else
    reject('Invalid promise')
})

promise
  .then(r => console.log(r))
  .catch(r => console.log(r))
//=> Invalid promise
```

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function rand(end) {
  const promise = new Promise((resolve, reject) => {
    if (end > 0)
      resolve(getRandomIntInclusive(0, end))
    else
      reject('Invalid number')
  })
  return promise
}

rand(10)
  .then(rand => console.log(rand))
  .catch(error => console.log(error))
//=>  9

rand('a')
  .then(rand => console.log(rand))
  .catch(error => console.log(error))
//=> Invalid number
```

## Chaining Promises
---

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function rand(end) {
  const promise = new Promise((resolve, reject) => {
    if (end > 0)
      resolve(getRandomIntInclusive(0, end))
    else
      reject('Invalid number')
  })
  return promise
}

async function sumAsync(a, b) {
  return a + b
}

rand(10)
  .then(rand => sumAsync(1, rand))
  .then(sum => console.log(sum))
//=> 2
```

## Demo
---

```js
function getJSON(url) {
  const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = () => {
      if (request.status === 200) {
        resolve(request.response)
      } else {
        reject(Error(request.statusText))
      }
    }
    request.onerror = () => {
      reject(Error('Error fetching data.'))
    }
    request.send()
  })
  return promise
}

const cepURL = 'https://viacep.com.br/ws/01001000/json/'
getJSON(cepURL)
  .then(res => JSON.parse(res))
  .then(json => console.log(json))

//=> {
//  cep: "01001-000",
//  logradouro: "Praça da Sé",
//  complemento: "lado ímpar",
//  bairro: "Sé",
//  localidade: "São Paulo",
//  uf: "SP",
//  unidade: "",
//  ibge: "3550308",
//  gia: "1004"
//}
```

## Reference
---

* [Promise \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises)
* [An Overview of JavaScript Promises](https://www.sitepoint.com/overview-javascript-promises/)
* [JavaScript Promises for Dummies](https://scotch.io/tutorials/javascript-promises-for-dummies)
* [Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)