# Deep Matching

```js
let { ip: ipAdd, mask: maskAdd } = { ip: "192.168.0.2", mask: "255.255.255.0" };
console.log(ipAdd); //=> '192.168.0.2'
console.log(maskAdd); //=> '255.255.255.0'
```

```js
let { mask: maskAdd, ip: ipAdd } = { ip: "192.168.0.2", mask: "255.255.255.0" };
console.log(ipAdd); //=> '192.168.0.2'
console.log(maskAdd); //=> '255.255.255.0'
```

```js
let { mask: maskAdd, ip: ipAdd, ip: ipAdd2 } = {
  ip: "192.168.0.2",
  mask: "255.255.255.0"
};
console.log(ipAdd); //=> '192.168.0.2'
console.log(ipAdd2); //=> '192.168.0.2'
console.log(maskAdd); //=> '255.255.255.0'
```
