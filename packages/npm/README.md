# Node Package Manager (NPM)

- [Architecture](#architecture)
- [Website](#website)
- [Registry](#registry)
- [CLI](#cli)

## Architecture

---

### Package Managers

- [https://libraries.io/](https://libraries.io/)
  - [NPM (Javascript)](https://www.npmjs.com/)
  - [PyPI (Python)](https://pypi.org/)
  - [Packagist (PHP)](https://packagist.org/)

### Components

```
┌────────────┐  ┌────────────┐  ┌─────────┐
│  Website   │  │  Registry  │  │   CLI   │
└────────────┘  └────────────┘  └─────────┘
```

## Website

---

[https://www.npmjs.com/search?q=jest](https://www.npmjs.com/search?q=jest):
![](assets/npm-search.png)

## Registry

---

### NPM Public Registry

```
    Packages                              Projects
                                      ┌─────────────────┐
                                      │ Project A       │
┌───────────────┐                     │┌───────────────┐│
│reuseble-code-x├─┐               ┌──▶││reuseble-code-x││
└───────────────┘ │   ╭────────╮  │   │└───────────────┘│
┌───────────────┐ │   │ Public │  │   └─────────────────┘
│reuseble-code-y├─┼──▶│Registry├──┤   ┌─────────────────┐
└───────────────┘ │   │ (NPM)  │  │   │ Project B       │
┌───────────────┐ │   ╰────────╯  │   │┌───────────────┐│
│reuseble-code-z├─┘               ├──▶││reuseble-code-y││
└───────────────┘                 │   │└───────────────┘│
                                  │   │┌───────────────┐│
                                  └──▶││reuseble-code-z││
                                      │└───────────────┘│
                                      └─────────────────┘
```

### Create a Package

```
 reuseble-code
┌─────────────┐
│lib.js       │
│package.json │
└─────────────┘
```

**package.json**:

```js
{
  "name": "reuseble-code",
  "version": "1.0.0"
}
```

## CLI

---

### Generate a plain old package.json

```
$ npm init -y
```

**package.json:**

```js
{
  "name": "reuseble-code",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### Publish/Install Package

```
                                                   ┌───────────────────────────┐
                                ╭────────╮    ┌───▶│$ npm install reuseble-code│
┌───────────────────────────┐   │ Public │    │    └───────────────────────────┘
│$ npm publish reuseble-code├──▶│Registry├────┤
└───────────────────────────┘   │ (NPM)  │    │    ┌───────────────────────────┐
                                ╰────────╯    └───▶│$ npm install reuseble-code│
                                                   └───────────────────────────┘
```

### Specifying Dependencies

[date-fns](https://date-fns.org):

```
$ mkdir project
$ cd project
$ npm init -y
$ npm i date-fns
```

```
$ tree .
.
├── node_modules
│   ├── date-fns
│   └── ...
├── package-lock.json
└── package.json
```

**package.json**:

```js
{
  "name": "project",
  "version": "1.0.0",
  "dependencies": {
    "date-fns": "^1.29.0"
  }
}
```

**show packages**:

```
$ ls node_modules
```

**install packages**:

```
$ rm package-lock.json
$ rm -rf node_modues
$ npm install
```

### Specifying devDependencies

[Jest](https://jestjs.io/en):

```
$ mkdir project
$ cd project
$ npm init -y
$ npm i -D jest
```

**package.json**:

```js
{
  "name": "project",
  "version": "1.0.0",
  "devDependencies": {
    "jest": "^23.6.0"
  }
}
```

**Running jest**:

```
$ npx jest --version
```

### Specifying multiples devDependencies

[Jest using babel (ESM)](https://jestjs.io/docs/en/getting-started#using-babel):

```
$ mkdir project
$ cd project
$ npm init -y
$ npm i -D jest babel-jest @babel/core @babel/preset-env
```

**package.json**:

```js
{
  "name": "project",
  "version": "1.0.0",
  "devDependencies": {
    "@babel/core": "^7.4.0",
    "@babel/preset-env": "^7.4.2",
    "babel-jest": "^24.5.0",
    "jest": "^24.5.0"
  }
}
```

**Running jest**:

```
$ npx jest --version
```
