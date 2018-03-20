// REGEXP
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// http://www.regular-expressions.info/reference.html
// https://regexr.com
// https://regex101.com/
// https://www.regextester.com
// https://regexper.com/ (rails road diagram)
  // https://atom.io/packages/regex-railroad-diagram
  // apm install regex-railroad-diagram
// http://ivanzuzak.info/noam/webapps/regex_simplifier/
// http://ivanzuzak.info/noam/webapps/fsm_simulator/
// http://ivanzuzak.info/noam/webapps/fsm2regex/

// SYNTAX
//   FLAGS             g, i, m, u, y
//   CHARACTER CLASSES . , \d, |D, \w, |W, \s, \S, \
//   CHARACTER SET     [], [^]
//   BOUNDARIES        ^, $, \b, |B
//   ALTERNATION       |
//   GROUPING AND BACK (), \n, (?:x)
//       REGERENCES
//   QUANTIFIERS       *, +, ?, {n}, {n, }, {n, m}, x*?, x+?, x??, x{n}?, x{n,}?, x{n,m}?
//   ASSERTIONS        x(?=y), x(?!y)

// FLAGS
// g global match
// i ignore case
// m multiline, makes ^ and $ match lines rather than the whole string
// u unicode
// y sticky
let phrase = "\nIs th\nis h\nis?"

let pattern = /is/
console.log(phrase.match(pattern)) //=> [ 'is', index: 7, input: '\nIs th\nis h\nis?' ]

pattern = /is/g
console.log(phrase.match(pattern)) //=> [ 'is', 'is' ]

pattern = /is/gi
console.log(phrase.match(pattern)) //=> [ 'Is', 'is', 'is' ]

pattern = /^is/gi
console.log(phrase.match(pattern)) //=> [ 'Is' ]

pattern = /^is/gim
console.log(phrase.match(pattern)) //=> [ 'Is', 'is', 'is' ]

pattern = /^\u{69}s/gim // '\u{69}' == 'i'
console.log(phrase.match(pattern)) //=> null

pattern = /^\u{69}s/gimu
console.log(phrase.match(pattern)) //=> [ 'Is', 'is', 'is' ]

phrase = "\nIs th\nis h\nis?"
pattern = /is/gi
console.log(phrase.match(pattern)) //=> [ 'Is', 'is', 'is' ]
console.log(pattern.lastIndex)     //=> 0

pattern = /is/yi
console.log(phrase.match(pattern)) //=> null
console.log(pattern.lastIndex)     //=> 0
pattern.lastIndex = 1
console.log(phrase.match(pattern)) //=> [ 'Is', index: 1, input: '\nIs th\nis h\nis?' ]
console.log(pattern.lastIndex)     //=> 3
console.log(phrase.match(pattern)) //=> null
console.log(pattern.lastIndex)     //=> 0

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky
// http://www.loganfranken.com/blog/831/es6-everyday-sticky-regex-matches/
// http://2ality.com/2015/07/regexp-es6.html
pattern.lastIndex = 0
console.log(pattern.exec(phrase)) //=> null
console.log(pattern.lastIndex)    //=> 0
pattern.lastIndex = 1
console.log(pattern.exec(phrase)) //=> [ 'Is', index: 1, input: '\nIs th\nis h\nis?' ]
console.log(pattern.lastIndex)    //=> 3
pattern.lastIndex = 2
console.log(pattern.exec(phrase)) //=> null
console.log(pattern.lastIndex)    //=> 0
pattern.lastIndex = 7
console.log(pattern.exec(phrase)) //=> [ 'is', index: 7, input: '\nIs th\nis h\nis?' ]
console.log(pattern.lastIndex)    //=> 9


// CHARACTER CLASSES / METACHARACTERS
// . dot, matches any single character except line terminators: \n, \r, \u2028 or \u2029.
let message = "let lot lt"
let pattern = /l.t/g
console.log(message.match(pattern)) //=> [ 'let', 'lot' ]

// \d digit [0-9]
let message = "ifpb1 ifpb2 ifpb@"
let pattern = /ifpb\d/g
console.log(message.match(pattern)) //=>  [ 'ifpb1', 'ifpb2' ]

// \D digit [^0-9]
let message = "ifpb1 ifpb2 ifpb@"
let pattern = /ifpb\D/g
console.log(message.match(pattern)) //=> [ 'ifpb@' ]

// \w  word [A-Za-z0-9_]
let message = "w@ a@ ?@"
let pattern = /\w@/g
console.log(message.match(pattern)) //=> [ 'w@', 'a@' ]

// \W  not word [^A-Za-z0-9_]
let message = "w@ a@ ?@"
let pattern = /\W@/g
console.log(message.match(pattern)) //=> [ '?@' ]

// \s whitespace
// [ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
// http://www.fileformat.info/info/unicode/category/Zs/list.htm
// single white space character, including space, tab, form feed, line feed and other Unicode spaces
let message = "a a aba"
let pattern = /a\sa/g
console.log(message.match(pattern)) //=> [ 'a a' ]

// \S not whitespace
let message = "a a aba"
let pattern = /a\Sa/g
console.log(message.match(pattern)) //=> [ 'aba' ]

// \
let message = "a.a aba"
let pattern = /a\.a/g
console.log(message.match(pattern)) //=> [ 'a.a' ]


// CHARACTER SET
// [] character set
let message = 'abcdefghijklmnopqrstuvwxyz'
let pattern = /[xyz]/g
console.log(message.match(pattern)) //=> [ 'x', 'y', 'z' ]

let message = 'abcdefghijklmnopqrstuvwxyz'
let pattern = /[a-c]/g
console.log(message.match(pattern)) //=> [ 'a', 'b', 'c' ]

let message = 'abcdefghijklmnopqrstuvwxyz0123456789'
let pattern = /[a-c12]/g
console.log(message.match(pattern)) //=> [ 'a', 'b', 'c', '1', '2' ]

let message = 'abcdefghijklmnopqrstuvwxyz0123456789'
let pattern = /[0-9]/g // \d
console.log(message.match(pattern)) //=> [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

let message = 'abcdefghijklmnopqrstuvwxyzABC'
let pattern = /[A-Z]/g
console.log(message.match(pattern)) //=> [ 'A', 'B', 'C' ]

let message = 'abcABCDEFGHIJKLMNOPQRSTUVWXYZ'
let pattern = /[a-z]/g
console.log(message.match(pattern)) //=> [ 'a', 'b', 'c' ]

let message = '0123abcABC!@#'
let pattern = /[A-Za-z0-9_]/g // \w
console.log(message.match(pattern)) //=> [ '0', '1', '2', '3', 'a', 'b', 'c', 'A', 'B', 'C' ]

// [^] complemented character set
let message = 'tuvwxyz'
let pattern = /[^xyz]/g
console.log(message.match(pattern)) //=> [ 't', 'u', 'v', 'w' ]

let message = '0123456789'
let pattern = /[^7-9]/g
console.log(message.match(pattern)) //=> [ '0', '1', '2', '3', '4', '5', '6' ]

let message = '!@#$qwert'
let pattern = /[^A-Za-z0-9_]/g // \W
console.log(message.match(pattern)) //=> [ '!', '@', '#', '$' ]
pattern = /[\W]/g
console.log(message.match(pattern)) //=> [ '!', '@', '#', '$' ]


// ALTERNATION (|)
let message = 'abcdefghijklmnopqrstuvwxyz'
let pattern = /x|y/g
console.log(message.match(pattern)) //=> [ 'x', 'y' ]

let message = 'red green blue'
let pattern = /green|red/g // != [green|red]
console.log(message.match(pattern)) //=> [ 'red', 'green' ]

let message = 'dark red green blue'
let pattern = /(dark )?(green|red)/g
console.log(message.match(pattern)) //=> [ 'dark red', 'green' ]


// BOUNDARIES
// ^ beginning
let message = 'instituto federal'
let pattern = /^instituto/
console.log(message.match(pattern)) //=> [ 'instituto', index: 0, input: 'instituto federal' ]

let message = 'o instituto federal da paraíba'
let pattern = /^instituto/
console.log(message.match(pattern)) //=> null

let message = 'lorem\nipsum\ndolor'
let pattern = /^\w{4}/g
console.log(message.match(pattern)) //=> [ 'lore' ]

let message = 'lorem\nipsum\ndolor'
let pattern = /^\w{4}/gm
console.log(message.match(pattern)) //=> [ 'lore', 'ipsu', 'dolo' ]

// $ end
let message = 'instituto federal'
let pattern = /federal$/
console.log(message.match(pattern)) //=> [ 'federal', index: 10, input: 'instituto federal' ]

let message = 'o instituto federal da paraíba'
let pattern = /federal$/
console.log(message.match(pattern)) //=> null

// \b word boundary
let message = 'apple, blackberry, cherry'
let pattern = /\ba\w*/g
console.log(message.match(pattern)) //=> [ 'apple' ]

let message = 'apple, blackberry, cherry'
let pattern = /\w*y\b/g
console.log(message.match(pattern)) //=> [ 'blackberry', 'cherry' ]

// \B non-word boundary
let message = 'apple, blackberry, cherry, charr'
let pattern = /\w*rr\B\w*/g
console.log(message.match(pattern)) //=> [ 'blackberry', 'cherry' ]

// GROUPING AND BACK REGERENCES
// () capturing group
let message = 'baby, babies, boom'
let pattern = /bab(y|ies)/g
console.log(message.match(pattern)) //=> [ 'baby', 'babies' ]

// \n backreference
// http://www.regular-expressions.info/backref.html
// http://www.regular-expressions.info/backref2.html
let message = 'hah dad bad dab gag gab'
let pattern = /(\w)a\1/g
console.log(message.match(pattern)) //=> [ 'hah', 'dad', 'gag' ]

let message = '<b>lorem</b> and <i>ipsum</i> and <span>dolor</span>'
let pattern = /<(\w+)>(.*)<\/\1>/g
console.log(message.match(pattern)) //=> [ '<b>lorem</b>', '<i>ipsum</i>', '<span>dolor</span>' ]

// (?:x) non-capturing group
let message = 'http://stackoverflow.com/'
let pattern = /(?:http|ftp):\/\/([^\/\r\n]+)(\/[^\r\n]*)?/
console.log(message.match(pattern))
//=>
// [ 'http://stackoverflow.com/', 'stackoverflow.com', '/', index: 0, input: 'http://stackoverflow.com/' ]
// $1 'stackoverflow.com'
// $2 '/'

let message = 'http://stackoverflow.com/questions/tagged/regex'
let pattern = /(?:http|ftp):\/\/([^\/\r\n]+)(\/[^\r\n]*)?/
console.log(message.match(pattern))
//=>
// [ 'http://stackoverflow.com/questions/tagged/regex', 'stackoverflow.com', '/questions/tagged/regex', index: 0, input: 'http://stackoverflow.com/questions/tagged/regex' ]
// $1 'stackoverflow.com'
// $2 '/questions/tagged/regex'

let message = '1st'
let pattern = /([0-9]+)(?:st|nd|rd|th)?/
console.log(message.match(pattern))
//=>
// [ '1st', '1', index: 0, input: '1st' ]
// $1 '1'


// QUANTIFIERS
// x*
let pattern = /<.*>/g
let message = '<foo> <bar> <>'
console.log(message.match(pattern)) //=> [ '<foo> <bar> <>' ]

// x*?
let pattern = /<.*?>/g
let message = '<foo> <bar> <>'
console.log(message.match(pattern)) //=> [ '<foo>', '<bar>', '<>' ]

// x+
let pattern = /\w+@\w+/g
let message

message = 'root@ifpb'
console.log(message.match(pattern)) //=> [ 'root@ifpb' ]
message = 'root@i'
console.log(message.match(pattern)) //=> [ 'root@i' ]
message = 'root@'
console.log(message.match(pattern)) //=> null

let pattern = /\w+/g
let message = 'root@ifpb'
console.log(message.match(pattern)) //=> [ 'root', 'ifpb' ]

let pattern = /\d+/g
let message = 'abc12345678cde90fgh'
console.log(message.match(pattern)) //=> [ '12345678', '90' ]

// x+?
let pattern = /\d+?/g
let message = 'abc12345678cde90fgh'
console.log(message.match(pattern)) //=> [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ]

// x?
let pattern = /\d?/
let message = '12'
console.log(message.match(pattern)) //=> [ '1', index: 0, input: '12' ]

// x??
let pattern = /\d??/
let message = '12'
console.log(message.match(pattern)) //=> [ '', index: 0, input: '12' ]

// x{n}
let pattern = /\d{5}/g
let message = 'abc12345678cde90fgh'
console.log(message.match(pattern)) //=> [ '12345' ]

// x{n}?
let pattern = /\d{5}?/g
let message = 'abc12345678cde90fgh'
console.log(message.match(pattern)) //=> [ '12345' ]

// x{n,}
let pattern = /\d{5,}/g
let message = 'abc12345678cde90fgh'
console.log(message.match(pattern)) //=> [ '12345678' ]

// x{n,}?
let pattern = /\d{5,}?/g
let message = 'abc12345678cde90fgh'
console.log(message.match(pattern)) //=> [ '12345' ]

// x{n,m}
let pattern = /\d{1,5}/g
let message = 'abc12345678cde90fgh'
console.log(message.match(pattern)) //=> [ '12345', '678', '90' ]

// x{n,m}?
let pattern = /\d{1,5}?/g
let message = 'abc12345678cde90fgh'
console.log(message.match(pattern)) //=> [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ]


// ASSERTIONS
// http://www.regular-expressions.info/lookaround.html
// x(?=y) positive lookahead, x only if x is followed by y
let pattern = /\d(?=px)/g
let message = '1pt 2px 3em 4px 4xp 3'
console.log(message.match(pattern)) //=> [ '2', '4' ]

let pattern = /(?=p)\w+/g
let message = '1pt 2px 3em 4px 4xp 3'
console.log(message.match(pattern)) //=> [ 'pt', 'px', 'px' , 'p' ]

// x(?!y) negative lookahead, x only if x is not followed by y
let pattern = /\d(?!px)/g
let message = '1pt 2px 3em 4px 4xp 3'
console.log(message.match(pattern)) //=> [ '1', '3', '4', '3' ]

let pattern = /(?!p)\d+/g
let message = '1pt 2px 3em 4px 4xp 3 px'
console.log(message.match(pattern)) //=> [ '1', '2', '3', '4', '4', '3' ]
