# Node Package Manager (NPM)


```
┌────────────┐  ┌────────────┐  ┌─────────┐
│  Website   │  │  Registry  │  │   CLI   │
└────────────┘  └────────────┘  └─────────┘
```

## Website

## Registry

### NPM Public Registry

```
                                  ┌───────────────┐
                                  │ Project A     │
                                  │┌─────────────┐│
                              ┌──▶││reuseble-code││
                  ╭────────╮  │   │└─────────────┘│
┌─────────────┐   │ Public │  │   └───────────────┘
│reuseble-code├──▶│Registry├──┤   ┌───────────────┐
└─────────────┘   │ (NPM)  │  │   │ Project B     │ 
                  ╰────────╯  │   │┌─────────────┐│
                              └──▶││reuseble-code││
                                  │└─────────────┘│
                                  └───────────────┘
```

### Package

```
 reuseble-code 
┌─────────────┐
│lib.js       │
│package.json │
└─────────────┘
```

## CLI

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

```
$ npm install
```