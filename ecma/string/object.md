# [String Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

* [Creating String](#creating-string)
* [String Object](#string-syntax)
  * [String](#string-methods): [`fromCharCode()`](#string.fromCharCode), [`fromCharPoint()`](#string.fromCharPoint)
  * [String Instance](#string-instances): [`includes()`](#stringprototypeincludes), [`repeat()`](#stringprototyperepeat), [`starstWith()`](#stringprototypestarstwith), [`endsWith()`](#stringprototypeendswith), [`substr()`](#stringprototypesubstr), [`substring()`](#stringprototypesubstring), [`slice()`](#stringprototypeslice), [`split()`](#stringprototypesplit), [`toLowerCase()`](#stringprototypetolowercase), [`toUpperCase()`](#stringprototypetouppercase), [`match()`](#stringprototypematch), [`replace()`](#stringprototypereplace), [`search()`](#stringprototypesearch), [`trim()`](#stringprototypetrim)

## Creating String
---

```js
// Primitive
let string = 'lorem ipsum'
console.log(string)        //=> 'lorem ipsum'
console.log(typeof string) //=> string
```

```js
// String
let string = String('lorem ipsum')
console.log(string)        //=> 'lorem ipsum'
console.log(typeof string) //=> string
```

```js
// String OO
let string = new String('lorem ipsum')
console.log(string)        //=> [String: 'lorem ipsum']
console.log(typeof string) //=> object
```

## String Object
---

### String

#### [String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

> Syntax:<br>
>   String.fromCharCode(num1, num2, ...)

```js
console.log(String.fromCharCode(65))        //=> A
```

#### [String.fromCharPoint()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharPoint)

> Syntax:<br>
>   String.fromCodePoint(num1, num2, ...)

```js
console.log(String.fromCodePoint(48))        //=> 0
console.log(String.fromCodePoint(65))        //=> A
console.log(String.fromCodePoint(97))        //=> a
```

### String Instances

#### [String.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

```js
console.log("lorem ipsum".length)             //=> 11
console.log(String("lorem ipsum").length)     //=> 11
console.log(new String("lorem ipsum").length) //=> 11
```

#### [String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

> Syntax:<br>
>   str.includes(searchString)<br>
>   str.includes(searchString, position)

```js
console.log("lorem ipsum".includes('lorem'))   //=> true
```

#### [String.prototype.repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

> Syntax:<br>
>   str.repeat(count)

```js
console.log("hello".repeat(3)) //=> 'hellohellohello'
```

#### [String.prototype.starstWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/starstWith)

> Syntax:<br>
>   str.startsWith(searchString)<br>
>   str.startsWith(searchString, position)

```js
console.log("lorem ipsum".startsWith('lorem')) //=> true
```

#### [String.prototype.endsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

> Syntax:<br>
>   str.endsWith(searchString)<br>
>   str.endsWith(searchString, length)

```js
console.log("lorem ipsum".endsWith('ipsum')) //=> true
```

#### [String.prototype.substr()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

> Syntax:<br>
>   str.substr(start)<br>
>   str.substr(start, length)

```js
console.log("lorem ipsum".substr(1,2))    //=> or
console.log("lorem ipsum".substr(1))      //=> orem ipsum
```

#### [String.prototype.substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

> Syntax:<br>
>   str.substring(indexStart)<br>
>   str.substring(indexStart, indexEnd)

```js
console.log("lorem ipsum".substring(1, 2)) //=> o
console.log("lorem ipsum".substring(1))    //=> orem ipsum
```

#### [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

> Syntax:<br>
>   str.slice(beginIndex)<br>
>   str.slice(beginIndex, endIndex)

```js
console.log("lorem ipsum".slice(-1))       //=> m
console.log("lorem ipsum".slice(1,-1))     //=> orem ipsu
```

#### [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

> Syntax:<br>
>   str.split()<br>
>   str.split(separator)<br>
>   str.split(separator, limit)

```js
console.log("lorem ipsum".split(''))              //=> [ 'l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm' ]
console.log("lorem ipsum".split(' '))             //=> [ 'lorem', 'ipsum' ]
console.log("lorem ipsum dolor".split(' ', 1))    //=> [ 'lorem' ]
console.log("lorem\nipsum-dolor".split(/[-\n]/g)) //=> [ 'lorem', 'ipsum', 'dolor' ]
```

#### [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

> Syntax:<br>
>   str.toLowerCase()

```js
console.log('LOREM IPSUM'.toLowerCase()) //=> 'lorem ipsum'
```

#### [String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

> Syntax:<br>
>   str.toUpperCase()

```js
console.log("lorem ipsum".toUpperCase()) //=> 'LOREM IPSUM'
```

#### [String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

> Syntax:<br>
>   str.match(regexp)

```js
console.log("lorem ipsum".match(/\w+/g)) //=> [ 'lorem', 'ipsum' ]
```

#### [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

> Syntax:<br>
>   str.replace(regexp|substr, newSubstr|function)

```js
console.log("lorem ipsum".replace('lorem', 'LOREM')) //=> 'LOREM ipsum'
```

#### [String.prototype.search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)

> Syntax:<br>
>   str.includes(searchString)
>   str.includes(searchString, position)

```js
console.log("lorem ipsum".search('lorem')) //=> 0
```

#### [String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

> Syntax:<br>
>   str.trim()

```js
console.log("  lorem  ipsum  ".trim()) //=> 'lorem  ipsum'
```