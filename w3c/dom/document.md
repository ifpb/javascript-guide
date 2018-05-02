# [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

* [Document.body](#documentbody)
* [Document.forms](#documentforms)
* [Document.images](#documentimages)
* [Document.links](#documentlinks)
* [Document.location](#documentlocation)
* [Document.title](#documenttitle)
* [Document.getElementById()](#documentgetelementbyid)
* [Document.querySelector()](#documentqueryselector)
* [Document.querySelectorAll()](#documentqueryselectorall)
* [Document.write()](#documentwrite)

## [Document.body](https://developer.mozilla.org/en-US/docs/Web/API/Document/body)
---

```js
const body = document.body
console.log(body)
```

## [Document.forms](https://developer.mozilla.org/en-US/docs/Web/API/Document/forms)
---

index:
```js
document.forms[0].elements[0].value
```

name:
```js
document.forms.login.elements.name.value
```

## [Document.images](https://developer.mozilla.org/en-US/docs/Web/API/Document/images)
---

```js
document.images[0].src
```

## [Document.links](https://developer.mozilla.org/en-US/docs/Web/API/Document/links)
---

```js
document.links[0].href
```

## [Document.title](https://developer.mozilla.org/en-US/docs/Web/API/Document/title)
---

```js
console.log(document.title)
```

## [Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
---

```js
const passwordElement = document.getElementById('password')
console.log(passwordElement.value)
```

## [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
---

```js
const passwordElement = document.querySelector('#password')
console.log(passwordElement.value)
```

## [Document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
---

```js
const inputs = document.querySelector('input')
Array.from(inputs).map(i => i.value)
```

## [Document.write()](https://developer.mozilla.org/en-US/docs/Web/API/Document/write)
---

```js
document.write('<h1>Lorem ipsum</h1>')
```