# String

- [Syntax](#syntax)
- [String Literal](#string-literal)
- [String Multiline](#string-multiline)
- [Special Cases](#special-cases)
- [Special Characters / Escape Sequences](#special-characters--escape-sequences)
- [Template String (Ecma6)](#template-string-ecma6)
- [Array of characters](#array-of-characters)
- [Unicode and JavaScript](#unicode-and-javascript)
- [Surrogate Pair <h,l>](#surrogate-pair-hl)
- [Unicode problem](#unicode-problem)

## Syntax

---

- [String Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [String Literal 1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#String_literals)
- [String Literal 2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals)

![String](http://json.org/string.gif)<br>
Reference: [JSON ORG](http://json.org)

## String Literal

---

```js
console.log('h'); //=> 'h'
console.log('hello world'); //=> 'hello world'
console.log('hello world'); //=> 'hello world'
```

## String Multiline

---

```js
let name =
  'hello \
world';
console.log(name); //=> 'hello world'

let name = 'hello ' + 'world';
console.log(name); //=> 'hello world'

// Long literal strings
let longString =
  'This is a very long string which needs ' +
  'to wrap across multiple lines because ' +
  'otherwise my code is unreadable.';

let longString =
  'This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.';

let longString = `This is a very long string which needs
to wrap across multiple lines because
otherwise my code is unreadable.`;
```

## Special Cases

---

```js
console.log('<img src="url">'); //=> '<img src="url">'
console.log('<span class="ativa">10</span>'); //=> '<span class="ativa">10</span>'
console.log('<span class="ativa">10</span>'); //=> '<span class="ativa">10</span>'
console.log("hello' world"); //=> 'hello\' world'
console.log('hello<br>world'); //=> 'hello<br>world'
```

## Special Characters / Escape Sequences

---

```js
console.log("hello' world"); //=> 'hello\' world'
console.log('hello\nworld'); //=> 'hello\nworld'
console.log('I \u2661 JavaScript!'); //=> 'I ♡ JavaScript!'
```

## Template String (Ecma6)

---

```js
let name = 'Fulano';
console.log('Hello ' + name); //=> 'Hello Fulano'
```

```js
let name = 'Fulano';
let email = 'fulano@gmail.com';
let id = '1';

let row = '<tr><td>' + id + '</td><td>' + name + '</td><td>' + email + '</td></tr>';

console.log(row);
//=> <tr><td>1</td><td>Fulano</td><td>fulano@gmail.com</td></tr>
```

```js
let name = 'Fulano';
let email = 'fulano@gmail.com';
let id = '1';

let row = `<tr><td>${id}</td><td>${name}</td><td>${email}</td></tr>`;

console.log(row);
//=> <tr><td>1</td><td>Fulano</td><td>fulano@gmail.com</td></tr>
```

## Array of characters

---

```js
let text = 'lorem ipsum';
console.log(text[0]);
//=>
// l
```

```js
let text = 'lorem ipsum';
for (let char = 0; char < text.length; char++) {
  console.log(text[char]);
}
//=>
// l
// o
// r
// e
// m
//
// i
// p
// s
// u
// m
```

```js
let text = 'lorem ipsum';
for (letter of text) {
  console.log(letter);
}
//=>
// l
// o
// r
// e
// m
//
// i
// p
// s
// u
// m
```

## Unicode and JavaScript

---

[Reference](http://speakingjs.com/es5/ch24.html)

```js
console.log('Z');

// Unicode sequence: three octal digits XXX between 0 and 377
console.log('\132'); //=> 'Z'

// Unicode sequence: two hexadecimal digits XX between 00 and FF
console.log('\x5A'); //=> 'Z'

// Unicode sequence: four hexadecimal digits XXXX - BMP
console.log('\u005A'); //=> 'Z'

// Unicode code point escape sequences
console.log('\u{005A}'); //=> 'Z'

// Unicode code point escapes \u{XXXXX} ES6
console.log('\u{0005A}'); //=> 'Z'
```

## Surrogate Pair <h,l>

---

[Reference](https://mathiasbynens.be/notes/javascript-encoding#surrogate-pairs)

```js
// U+0005A: \u{0005A} = \u{u00000}\u{u0005A}
console.log('\u0000\u005A'); //=> 'Z'

// U+1F4A9: \u{1F4A9} = \u{u0D83D}\u{u0DCA9}
console.log('\u{1F4A9}'); //=> 💩
console.log('\uD83D\uDCA9'); //=> 💩
```

## Unicode problem

---

[Reference](https://mathiasbynens.be/notes/javascript-unicode)

```js
// U+0041 LATIN CAPITAL LETTER A
console.log('A'.length); //=> 1
console.log('A' == '\u0041'); //=> true

// U+1D400 MATHEMATICAL BOLD CAPITAL A
console.log('𝐀'.length); //=> 2
console.log('𝐀' == '\uD835\uDC00'); //=> true
```
