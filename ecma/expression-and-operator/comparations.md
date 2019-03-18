# Comparations

| Comparation                           | Result                     |
| ------------------------------------- | -------------------------- |
| false == "")                          | true                       |
| false == [])                          | true                       |
| false == null)                        | false                      |
| false == undefined)                   | false                      |
| {"value":1} == {"value":1})           | false                      |
| const obj = {"value":1}<br>obj == obj | true                       |
| undefined == undefined                | true                       |
| null == null                          | true                       |
| NaN == NaN                            | false                      |
| Object.is(NaN, NaN)                   | true                       |
| Object.is([], [])                     | false (Not comapre Array)  |
| Object.is({}, {})                     | false (Not comapre Object) |
