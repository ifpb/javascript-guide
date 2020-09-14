# Values & Types

- [Type hierarchy](#type-hierarchy)
- [Literal Types](#literal-types)

## Type hierarchy

---

![JavaScript’s type hierarchy](http://exploringjs.com/impatient-js/img-book/b8c834a3420a3b2d2df0d90dfa0c1dfd1f2ffbc9.svg)<br>
[JavaScript for impatient programmers (Book)](http://exploringjs.com/impatient-js/ch_values.html)

## Literal Types

---

| Category  | Types                               | Values                                                                                            |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| Primitive | [Undefined](../undefined/syntax.md) | `undefined`                                                                                       |
| Primitive | [Null](../null/syntax.md)           | `null`                                                                                            |
| Primitive | [Boolean](../boolean/syntax.md)     | `true`, `false`                                                                                   |
| Primitive | [Number](../number/syntax.md)       | `-15`<br>`15`, `0b1111`, `0o17`, `0xf`<br>`-123.45`<br>`123.45`, `1.2345e2`, `12345E-2` |
| Primitive | [String](../string/syntax.md)       | `'Hello'`, `"Hello"`, `` `Hello` ``                                                               |
| Primitive | [Symbol](../symbol/syntax.md)       | `Symbol("number")`                                                                                |
| Object    | [Array](../array/syntax.md)         | `[]`<br>`[1, 2, 3]`<br>`[1, '2', true, [3, false]]`<br>`["Alice", "alice@ifpb.edu.br"]`                                                           |
| Object    | [Object](../object/syntax.md)       | `{name: "Alice", email: "alice@ifpb.edu"}`                                                            |
| Object    | [Map](../map/syntax.md)             | `new Map([[0, 1],[2, 3], [1, 3]])`                                                                |
| Object    | [Set](../set/syntax.md)             | `new Set([1, 1, 1, 2, 2, 3, 4, 5])`                                                               |
| Object    | [Date](../date/object.md)           | `new Date()`                                                                                      |

<!-- TODO

## Type Conversion

---

https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md
https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839
https://javascript.info/type-conversions
https://www.w3schools.com/js/js_type_conversion.asp -->
