# [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

* [HTMLElement.dataset](#htmlelementdataset)
* [HTMLElement.style](#htmlelementstyle)
* [HTMLElement.click()](#htmlelementclick)
* [HTMLElement.focus()](#htmlelementfocus)

## [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
---

```html
<article id="article-10" data-created="2018-05-02" data-author="Alice">
  ...
</article>
```

```js
const article = document.querySelector('article')
console.log(article.dataset.created) //=> 2018-05-02
console.log(article.dataset.author)  //=> Alice
```

References:
* [Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

## [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
---

[CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration):
```js
const p = document.querySelector('p')
p.style.cssText = "color: blue;"
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

```js
const p = document.querySelector('p')
p.setAttribute("class", "active red")
```

[Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) (Alternative):
```js
const p = document.querySelector('p')
p.classList.add('color-blue')
```

[Element.className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) (Alternative):
```js
const p = document.querySelector('p')
p.className = 'text-center'
```

[CSS Typed Object Model](https://developers.google.com/web/updates/2018/04/nic66#cssom) (Alternative):
```js
const p = document.querySelector('p')
p.attributeStyleMap.set('opacity', 0.3)
p.attributeStyleMap.get('opacity').value //=> 0.3
p.attributeStyleMap.has('opacity');      //=> true
p.attributeStyleMap.delete('opacity');
p.attributeStyleMap.clear();             // remove all styles
```

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
