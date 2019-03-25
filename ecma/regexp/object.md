# [RegExp Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

- [Regexp](#Regexp): [`lastIndex`](#RegExp.lastIndex), [`flags`](#RegExp.prototype.flags), [`flags`](#RegExp.prototype.flags), [`test()`](<#RegExp.prototype.test()>), [`exec()`](<#RegExp.prototype.exec()>)
- [String](#String): [`match()`](<#String.prototype.match()>), [`replace()`](<#String.prototype.replace()>), [`search()`](<#String.prototype.search()>), [`split()`](<#String.prototype.split()>)
- [HTML](#HTML): [input pattern](#html-input-pattern)

## Regexp

---

```js
let pattern = /abc/i;
pattern = new RegExp('abc', 'i');
pattern = new RegExp(/abc/, 'i');
```

### RegExp.lastIndex

```js
console.log(pattern.lastIndex); //=> 0
```

### RegExp.prototype.flags

```js
console.log(pattern.flags); //=> i
```

### RegExp.prototype.test()

```js
let message = 'ifpb';
let pattern = /\w+/;
console.log(pattern.test(message)); //=> true
```

```js
let message = '!@#$';
let pattern = /\w+/;
console.log(pattern.test(message)); //=> false
```

### RegExp.prototype.exec()

```js
let message = 'ifpb-jp, ifpb-cg';
let pattern = /\w+-\w+/g;

console.log(pattern.exec(message)); //=> [ 'ifpb-jp', index: 0, input: 'ifpb-jp, ifpb-cg' ]
console.log(pattern.lastIndex); //=> 7

console.log(pattern.exec(message)); //=> [ 'ifpb-cg', index: 9, input: 'ifpb-jp, ifpb-cg' ]
console.log(pattern.lastIndex); //=> 16

console.log(pattern.exec(message)); //=> null
console.log(pattern.lastIndex); //=> 0
```

## String

---

### String.prototype.match()

```js
let message = 'ab';
let pattern = /abc/g;
console.log(message.match(pattern)); //=> null
```

```js
let message = 'abc';
let pattern = /abc/g;
console.log(message.match(pattern)); //=> [ 'abc' ]
```

```js
let message = 'abcabcab';
let pattern = /abc/;
console.log(message.match(pattern)); //=> [ 'abc', index: 0, input: 'abcabcab' ]
pattern = /abc/g;
console.log(message.match(pattern)); //=> [ 'abc', 'abc' ]
```

```js
let message = 'mensagem <b>importante</b>';
let pattern = /<b>(.*)<\/b>/;
console.log(message.match(pattern));
//=> [ '<b>importante</b>', 'importante', index: 9, input: 'mensagem <b>importante</b>' ]
```

```js
let message = '11:11:20';
let pattern = /([0-1]\d|2[0-3])(:[0-5]\d){1,2}/;
console.log(message.match(pattern)); //=> [ '11:11:20', '11', ':20', index: 0, input: '11:11:20' ]
pattern = /([0-1]\d|2[0-3])(:[0-5]\d){1,2}/g;
console.log(message.match(pattern)); //=> [ '11:11:20' ]
```

### String.prototype.replace()

```js
let message = 'mensagem <b>importante</b>';
let result = '';

result = message.replace(/<b>|<\/b>/g, '');
console.log(result); //=> mensagem importante
```

```js
let message = 'mensagem <b>importante</b>';
let result = message.replace('<b>', '<i>');
result = result.replace('</b>', '</i>');
console.log(result);
```

```js
let message = 'mensagem <b>importante</b>';
let result = message.replace(/<b>(.*)<\/b>/, '<i>importante</i>');
console.log(message); //=> mensagem <b>importante</b>
console.log(result); //=> mensagem <i>importante</i>
```

```js
let message = 'mensagem <b>importante</b>';
let result = message.replace(/<b>(.*)<\/b>/, '<i>$1</i>');
console.log(message); //=> mensagem <b>importante</b>
console.log(result); //=> mensagem <i>importante</i>
```

```js
let message = 'mensagem <b>importante</b> e <b>interessante</b>';
let result = message.replace(/<b>(.*)<\/b>/g, '<i>$1</i>');
console.log(message); //=> mensagem <b>importante</b> e <b>interessante</b>
console.log(result); //=> mensagem <i>importante</i> e <i>interessante</i>
```

```js
let message = '01/12/2017';
let result = '';

result = message.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1');
console.log(message); //=> 01/12/2017
console.log(result); //=> 2017-12-01
```

### String.prototype.search()

```js
let message = 'mensagem <b>importante</b> e <b>interessante</b>';
let pattern = /<b>(.*)<\/b>/;
console.log(message.search(pattern)); //=> 9
```

```js
pattern = /<b>(.*)<\/b>/g;
console.log(message.search(pattern)); //=> 9
```

```js
pattern = /ifpb/;
console.log(message.search(pattern)); //=> -1
```

### String.prototype.split()

```js
let message = 'lorem ipsum\ndolor';
let pattern = /\s/g;
console.log(message.split(pattern))[('lorem', 'ipsum', 'dolor')];
```

## HTML

---

### HTML input pattern

```html
<input type="text" pattern="\d{5}-\d{3}" />
```
