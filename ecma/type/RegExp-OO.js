// REGEXP
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

// Regexp
// RegExp.lastIndex
// RegExp.prototype.flags
// RegExp.prototype.flags
// RegExp.prototype.test()
// RegExp.prototype.exec()

// String
// String.prototype.match()
// String.prototype.replace()
// String.prototype.search()
// String.prototype.split()

// HTML
// HTML input pattern

// Regexp
let pattern = /abc/i
    pattern = new RegExp('abc', 'i')
    pattern = new RegExp(/abc/, 'i')

// RegExp.lastIndex
console.log(pattern.lastIndex) //=> 0

// RegExp.prototype.flags
console.log(pattern.flags)     //=> i

// RegExp.prototype.test()
let message = 'ifpb'
let pattern = /\w+/
console.log(pattern.test(message)) //=> true

let message = '!@#$'
let pattern = /\w+/
console.log(pattern.test(message)) //=> false

// RegExp.prototype.exec()
let message = 'ifpb-jp, ifpb-cg'
let pattern = /\w+-\w+/g

console.log(pattern.exec(message)) //=> [ 'ifpb-jp', index: 0, input: 'ifpb-jp, ifpb-cg' ]
console.log(pattern.lastIndex)     //=> 7

console.log(pattern.exec(message)) //=> [ 'ifpb-cg', index: 9, input: 'ifpb-jp, ifpb-cg' ]
console.log(pattern.lastIndex)     //=> 16

console.log(pattern.exec(message)) //=> null
console.log(pattern.lastIndex)     //=> 0


// String
// String.prototype.match()
let message = "ab"
let pattern = /abc/g
console.log(message.match(pattern)) //=> null

let message = "abc"
let pattern = /abc/g
console.log(message.match(pattern)) //=> [ 'abc' ]

let message = "abcabcab"
let pattern = /abc/
console.log(message.match(pattern)) //=> [ 'abc', index: 0, input: 'abcabcab' ]
    pattern = /abc/g
console.log(message.match(pattern)) //=> [ 'abc', 'abc' ]

let message = "mensagem <b>importante</b>"
let pattern = /<b>(.*)<\/b>/
console.log(message.match(pattern))
    //=> [ '<b>importante</b>', 'importante', index: 9, input: 'mensagem <b>importante</b>' ]

let message = "11:11:20"
let pattern = /([0-1]\d|2[0-3])(:[0-5]\d){1,2}/
console.log(message.match(pattern)) //=> [ '11:11:20', '11', ':20', index: 0, input: '11:11:20' ]
    pattern = /([0-1]\d|2[0-3])(:[0-5]\d){1,2}/g
console.log(message.match(pattern)) //=> [ '11:11:20' ]

// String.prototype.replace()
let message = 'mensagem <b>importante</b>'
let result  = ''

result = message.replace(/<b>|<\/b>/g, '')
console.log(result)

let message = 'mensagem <b>importante</b>'
let result  = ''

result = message.replace("<b>", "<i>")
result = result.replace("</b>", "</i>")
console.log(result)

result = message.replace(/<b>(.*)<\/b>/, '<i>importante</i>')
console.log(message) //=> mensagem <b>importante</b>
console.log(result)  //=> mensagem <i>importante</i>

result  = message.replace(/<b>(.*)<\/b>/, '<i>$1</i>')
console.log(message) //=> mensagem <b>importante</b>
console.log(result)  //=> mensagem <i>importante</i>

message = 'mensagem <b>importante</b> e <b>interessante</b>'
result  = message.replace(/<b>(.*)<\/b>/g,"<i>$1</i>")
console.log(message) //=> mensagem <b>importante</b> e <b>interessante</b>
console.log(result)  //=> mensagem <i>importante</i> e <i>interessante</i>

let message = '01/12/2017'
let result  = ''

result  = message.replace(/(\d{2})\/(\d{2})\/(\d{4})/,"$3-$2-$1")
console.log(message) //=> 01/12/2017
console.log(result)  //=> 2017-12-01

// String.prototype.search()
let message = 'mensagem <b>importante</b> e <b>interessante</b>'
let pattern = /<b>(.*)<\/b>/
console.log(message.search(pattern)) //=> 9

pattern = /<b>(.*)<\/b>/g
console.log(message.search(pattern)) //=> 9

pattern = /ifpb/
console.log(message.search(pattern)) //=> -1


// String.prototype.split()
let message = 'lorem ipsum\ndolor'
let pattern = /\s/g
console.log(message.split(pattern)) [ 'lorem', 'ipsum', 'dolor' ]

// HTML
// HTML input pattern
<input type="text" pattern="\d{5}-\d{3}">
