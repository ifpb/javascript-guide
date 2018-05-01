# [History](https://developer.mozilla.org/en-US/docs/Web/API/History)

* Traveling through history
  * [History.length](#historylength)
  * [History.back()](#historyback)
  * [History.forward()](#historyforward)
  * [History.go()](#historygo)
* Adding and modifying history entries
  * [History.state](#historystate)
  * [History.pushState()](#historypushState)
  * [history.replaceState()](#historyreplaceState)

## [History.length](https://developer.mozilla.org/en-US/docs/Web/API/History/length)
---

```js
console.log(history.length)
```

## [History.back()](https://developer.mozilla.org/en-US/docs/Web/API/History)
---

```js
history.back()    // history.go(-1)
```

## [History.forward()](https://developer.mozilla.org/en-US/docs/Web/API/History)
---

```js
history.forward() // history.go(1)
```

## [History.go()](https://developer.mozilla.org/en-US/docs/Web/API/History)
---

```js
history.go(-1)
history.go(1)
```

## [History.state](https://developer.mozilla.org/en-US/docs/Web/API/History)
---

```js
let currentState = history.state
```

## [History.pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)
---

```js
let people = { names: ["Alice", "Charlie", "Bob"] }
history.pushState(people, "People", "people.html")
```

## [history.replaceState()](https://developer.mozilla.org/en-US/docs/Web/API/History)
---

```js
let people = { names: ["Alice", "Bob", "Charlie"] }
history.replaceState(people, "People Sorted", "people.html#sorted")
```

## References
---

* [Manipulating the browser history](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
* [Using the HTML5 History API](https://css-tricks.com/using-the-html5-history-api/)