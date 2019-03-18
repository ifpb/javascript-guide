# [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```js
// [a, b] = [1, 2] / Array Matching
let [a, b] = [8, 80];
console.log(a); //=> 8
console.log(b); //=> 80
```

```js
let [a, , b] = [8, 80, 800]; // Ignoring some values
console.log(a); //=> 8
console.log(b); //=> 80
```

```js
// Swapping variables
let a = 1;
let b = ((3)[(a, b)] = [b, a]);
console.log(a); //=> 3
console.log(b); //=> 1
```

```js
let [number, string] = [8, "fulano"];
console.log(number); //=> 8
console.log(string); //=> 'fulano'
```

```js
let [ip, mask = "255.255.255.0"] = ["192.168.0.2"]; // Fail-Soft Destructuring
console.log(ip); //=> '192.168.0.2'
console.log(mask); //=> '255.255.255.0'
```

```js
let [ip, mask = "255.255.255.0"] = ["192.168.0.2", "255.255.0.0"];
console.log(ip); //=> '192.168.0.2'
console.log(mask); //=> '255.255.0.0'
```

```js
// {a, b} = {a:1, b:2} / Object Matching
let { ip, mask } = { ip: "192.168.0.2", mask: "255.255.255.0" };
console.log(ip); //=> '192.168.0.2'
console.log(mask); //=> '255.255.255.0'
```

Reference:

- [Destructuring assignment \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
