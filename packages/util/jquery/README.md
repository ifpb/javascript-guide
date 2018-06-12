# [Jquery](https://jquery.com)

## Installation
---

* [CDN](https://code.jquery.com)
* [Download](https://jquery.com/download/)

## Examples
---

### Selectors

```js
jQuery('div')
```

```js
$('div')
```

```js
$('div:contains('John')')
```

### Attributes/CSS

```js
$('div:contains('John')').css( "text-decoration", "underline" )
```

```js
$('p').addClass('text-center')
```

### Manipulation

```js
$('p').html('lorem ipsum dolor')
```

### Effects

```js
$('p').hide().fadeIn( "slow" )
```

### Ajax

```js
$.getJSON('http://viacep.com.br/ws/01001000/json/', function(cep) {
  console.log(cep.localidade)
})
```

## Reference
---

* [Query Quick API Reference 3.0](https://oscarotero.com/jquery/)
* [You might not need jQuery](http://youmightnotneedjquery.com)