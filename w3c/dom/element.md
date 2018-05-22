# [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

* [Element.attributes](#elementattributes)
* [Element.classList](#elementclasslist)
* [Element.id](#elementid)
* [Element.innerHTML](#elementinnerhtml)
* [Element.hasAttribute()](#elementhasattribute)
* [Element.setAttribute()](#elementsetattribute)
* [Element.insertAdjacentHTML()](#elementinsertadjacenthtml)
* [Element.querySelector()](#elementqueryselector)
* [Element.querySelectorAll()](#elementqueryselectorall)
* [ChildNode.remove()](#childnoderemove)

## [Element.attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)
---

```js
document.body.attributes[0].name
document.body.attributes[0].value
```

## [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
---

```js
document.body.classList.remove('color-red')
document.body.classList.add('color-blue')
```

## [Element.id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)
---

```js
document.body.id
```

## [Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
---

```js
document.body.innerHTML = '<h1>Lorem ipsum</h1>'
```

## [Element.hasAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute)
---

```js
document.body.hasAttribute('id')
```

## [Element.setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
---

```js
document.body.setAttribute('class', 'active red')
```

## [Element.insertAdjacentHTML()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
---

```js
const tbody = document.querySelector('table tbody')
tbody.insertAdjacentHTML('afterbegin', '<tr><td>Item</td></tr>')
tbody.insertAdjacentHTML('beforeend', '<tr><td>Item</td></tr>')
```

## [Element.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
---

```js
const tbody = document.querySelector('table tbody')
tbody.querySelector('#time')
```

## [Element.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)
---

```js
const tbody = document.querySelector('table tbody')
tbody.querySelectorAll('.last-column')
```

## [ChildNode.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
---

```js
const tbody = document.querySelector('table tbody')
const lastRow = tbody.querySelector('#last-row')
lastRow.remove()
```