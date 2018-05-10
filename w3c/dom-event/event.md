# [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

* [Event.type](#eventtype)
* [Event.target](#eventtarget)
* [Event.preventDefault()](#eventpreventdefault)

## [Event.type](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
---

```js
const button = document.querySelector('button')
button.addEventListener('click', (event) => {
  console.log(event.type)
})
```

## [Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
---

```js
const button = document.querySelector('button')
button.addEventListener('click', (event) => {
  console.log(event.target.style)
})
```

## [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
---

```js
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
})
```