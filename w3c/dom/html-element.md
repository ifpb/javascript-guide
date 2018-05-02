# [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

* [HTMLElement.style](#HTMLElement.style)
* [HTMLElement.click()](#HTMLElement.click())
* [HTMLElement.focus()](#HTMLElement.focus())

## [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
---

[CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration):
```js
const p = document.querySelector('p')
p.style = "color: blue;"
```

[CSSStyleDeclaration.cssText](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText):
```js
const p = document.querySelector('p')
p.style.cssText = "color: blue; font-size: 1.1rem;"
```

[CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference):
```js
const p = document.querySelector('p')
p.style.fontSize = "1.1rem"
```

[Element.setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) (Alternative):
```js
const p = document.querySelector('p')
p.setAttribute("style", "color: blue; font-size: 1.1rem;")
```

[Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) (Alternative):
```js
const p = document.querySelector('p')
p.classList.add('color-blue')
```

[CSS Typed Object Model](https://developers.google.com/web/updates/2018/04/nic66#cssom) (Alternative)

## [HTMLElement.click()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click)
---

```js
const button = document.querySelector('button')
button.click()
```

## [HTMLElement.focus()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus)
---

```js
const input = document.querySelector('#name')
input.focus()
```
