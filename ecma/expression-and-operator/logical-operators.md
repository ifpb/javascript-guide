# Logical Operatos

## Logical AND Operator
---

| Operand 1 | Operand 2 | Logical | Return |
|-|-|-|-|
|true  | true     | t && t | true  |
|true  | false    | t && f | false |
|false | true     | f && t | false |
|false | (3 == 4) | f && f | false |
|"Cat" | "Dog"    | t && t | "Dog" |
|true  | "Cat"    | f && t | "Cat" |
|"Cat" | true     | t && f | true  |
|false | "Cat"    | f && t | false |
|"Cat" | false    | t && f | false |
|1     | 2        | t && t | 2     |
|true  | 2        | f && t | 2     |
|1     | true     | t && f | true  |
|false | 2        | f && t | false |
|1     | false    | t && f | false |
|""    | false    | f && f | false |

## Logical OR Operator
---

| Operand 1 | Operand 2 | Logical | Return |
|-|-|-|-|
| true  | true     | t \|\| t | true  |
| false | true     | f \|\| t | true  |
| true  | false    | t \|\| f | true  |
| false | (3 == 4) | f \|\| f | false |
| "Cat" | "Dog"    | t \|\| t | "Cat" |
| false | "Cat"    | f \|\| t | "Cat" |
| "Cat" | false    | t \|\| f | "Cat" |
| ""    | false    | t \|\| f | false |
| false | ""       | f \|\| t | ""    |