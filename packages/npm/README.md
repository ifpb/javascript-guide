# Node Package Manager (NPM)

* [Architecture](#architecture)
* [Website](#website)
* [Registry](#registry)
* [CLI](#cli)

## Architecture
---

### Package Managers

* [https://libraries.io/](https://libraries.io/)
  * [NPM (Javascript)](https://www.npmjs.com/)
  * [PyPI (Python)](https://pypi.org/)
  * [Packagist (PHP)](https://packagist.org/)

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
$ cd project
$ npm i date-fns
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
$ rm -rf node_modues
$ npm install
```

### Specifying devDependencies

[Jest](https://jestjs.io/en):
```
$ cd project
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
$ cd project
$ npm i -D jest babel-jest babel-core regenerator-runtime babel-preset-env
```

**package.json**:

```js
{
  "name": "project",
  "version": "1.0.0",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-jest": "^23.6.0",
    "babel-preset-env": "^1.7.0",
    "jest": "^23.6.0",
    "regenerator-runtime": "^0.12.1"
  }
}
```

**Running jest**:

```
$ npx jest --version
```