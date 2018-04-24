// REGEXP
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// http://www.regular-expressions.info/reference.html
// http://regexr.com/
// https://regex101.com/
// https://regexper.com/ (rails road diagram)
  // https://atom.io/packages/regex-railroad-diagram
  // apm install regex-railroad-diagram
// http://ivanzuzak.info/noam/webapps/regex_simplifier/
// http://ivanzuzak.info/noam/webapps/fsm_simulator/
// http://ivanzuzak.info/noam/webapps/fsm2regex/

// Syntax
/abc/i
new RegExp('abc', 'i')
new RegExp(/abc/, 'i')

// Matches
console.log("ab".match(/abc/))        //=> null
console.log("abc".match(/abc/))       //=> [ 'abc', index: 0, input: 'abc' ]
console.log("abcabcab".match(/abc/))  //=> [ 'abc', index: 0, input: 'abcabcab' ]
console.log("abcabcab".match(/abc/g)) //=> [ 'abc', 'abc' ]

// Patterns
// https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149
// hexa number
0x1f
0x1F
0X1f
0X1FFFF
/^0[xX][\dA-Fa-f]+$/

// ip
255.255.255.255
/^\d{3}\.\d{3}\.\d{3}\.\d{3}$/
/^(\d{3}\.){3}\d{3}$/

// cep
01001000
01001-000
01.001-000
/^(\d{8}|\d{2}\.?\d{3}-\d{3})$/

// Byte
01010101
11110000

/[01]{8}/

// cpf
11122233344
111.222.333-44
/^\d{11}|\d{3}\.\d{3}\.\d{3}-\d{2}$/
/^(\d{9}|\d{3}(\.\d{3}){2}-\d{2})$/

// hora
12:12:12
12:12
23:12
/^([0-1]\d|2[0-3])(:[0-5]\d){1,2}$/

// data
31/01/1970
01/31/1970
01-31-1970
1970-01-31
/^((0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}|(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4})$/
// o sonho http://stackoverflow.com/questions/15491894/regex-to-validate-date-format-dd-mm-yyyy

// number
regex = /^(\d+|\d{1,3}(\.\d{3})*)(,\d{1,2})?$/
console.log(regex.test("000"))
console.log(regex.test("a10,000"))
console.log(regex.test("a10,000"))
console.log(regex.test("10,000"))
console.log(regex.test("1000000"))
console.log(regex.test("10"))
console.log(regex.test("10,0"))
console.log(regex.test("1.000.000"))
console.log(regex.test("1.000.000,0"))
console.log(regex.test("1.000.000,10"))
console.log(regex.test("1.100"))

// currency
R$ 1.000.000,10
R$10,10

// phone
12341234
1234 1234
(83) 1234 1234
(83) 1234-1234
(83)1234-1234
(83)9 1234-1234
(83) 9 1234-1234
(83)9.1234-1234
(83) 9.1234-1234
(83)91234-1234
055 83 91234-1234
05583912341234
+55 83 91234-1234
+5583912341234

// username

// url

// email

// password
// http://stackoverflow.com/questions/19605150/regex-for-password-must-be-contain-at-least-8-characters-least-1-number-and-bot
// http://stackoverflow.com/questions/22254442/regular-expression-for-password-does-not-begin-with-does-not-contain
/^[a-z0-9_-]{*,}$/
/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

Minimum 8 characters at least 1 Alphabet and 1 Number
/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
Minimum 8 characters at least 1 Alphabet, 1 Number and 1 Special Character:
/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet and 1 Number:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
Minimum 8 and Maximum 10 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/


// RegExp
/\w+/.test("ifpb")
/\w+/.test("!@#$")

message = "ifpb-jp, ifpb-cg"
pattern = /\w+-\w+/g
console.log(pattern.exec(message))
console.log(pattern.lastIndex)
console.log(pattern.exec(message))
console.log(pattern.lastIndex)
console.log(pattern.exec(message))
console.log(pattern.lastIndex)
/\w+/.exec("!@#$")

// String
"mensagem <b>importante</b>".match(/<b>(.*)<\/b>/)
"mensagem <b>importante</b>".match(/ifpb/)
"11:11:20".match(/([0-1]\d|2[0-3])(:[0-5]\d){1,2}/) // match and groups
"11:11:20".match(/([0-1]\d|2[0-3])(:[0-5]\d){1,2}/g)

"lorem ipsum\ndolor".split(/\s/)

"mensagem <b>importante</b>".search(/<b>(.*)<\/b>/)
"mensagem <b>importante</b>".search(/ifpb/)

"mensagem <b>importante</b>".replace(/<b>(.*)<\/b>/,"<i>importante</i>")
"mensagem <b>importante</b>".replace(/<b>(.*)<\/b>/,"<i>$1</i>")
"mensagem <b>importante</b> e <b>interessante</b>".replace(/<b>(.*)<\/b>/,"<i>$1</i>")
"01/12/2017".replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1")

// input pattern
<input type="text" pattern="\d{5}-\d{3}">

// Problem
// contain cep
// extract ceps
var text = "Lorem ipsum 12345-123 dolor sit amet, 12345123 consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// format yyyy-mm-dd
var date = "12/30/2016";

// criar uma função para validar cpf e cnpj
// tanto no padrão quanto no digito verificador
// http://ghiorzi.org/DVnew.htm

// validação de formulário

// Será que é possível usar RegExp no campo de pesquisa do Atom?
