# Map

```js
let obj = { name: "fulano" };
let map = new Map();

map.set(0, 1);
// map.set(1, 2)
map.set(2, 3);
map.set(1, 2);
map.set(obj, 10);

console.log(map);
```

```js
let map = new Map([[0, 1], [2, 3], [1, 3]]);

console.log(map);

for (let [key, value] of map.entries()) {
  console.log(`${key} => ${value}`);
}

console.log(map.get(2));
console.log(map.get(obj));
```

<!-- https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373 -->
