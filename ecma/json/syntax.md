# Javascript Object Notation (JSON)

* [Creating data sets](#creating-data-sets)
  * [Comma Separated Values (CSV)](#comma-separated-values-csv)
  * [eXtensible Markup Language (XML)](#extensible-markup-language-xml)
  * [YAML Ain't Markup Language (YAML)](#yaml-aint-markup-language-yaml)
  * [Javascript Object Notation (JSON)](#javascript-object-notation-json): 
    * [.json, .js (Quoted)](#json-js-quoted)
    * [.js (Unquoted)](#js-unquoted)
    * [.js (Indexed)](#js-indexed)
* [Web API](#web-api)
  * [IP API](#ip-api)
  * [JSONPlaceholder API](#jsonplaceholder-api)
  * [Via CEP API](#via-cep-api)

## Creating data sets
---

|NAME|EMAIL|
|-|-|
|fulano|fulano@gmail.com|
|sicrano|sicrano@gmail.com|

### Comma Separated Values (CSV)
```csv
name, email
fulano, fulano@gmail.com
sicrano, sicrano@gmail.com
```

### eXtensible Markup Language (XML)
```xml
<students>
  <student>
    <name>Fulano</name>
    <email>fulano@gmail.com</email>
  </student>
  <student>
    <name>Sicrano</name>
    <email>sicrano@gmail.com</email>
  </student>
</students>
```

### YAML Ain't Markup Language (YAML)

Reference: [doc](http://yaml.org/)

```yaml
-
  name: 'fulano'
  email: 'fulano@gmail.com'
-
  name: 'sicrano'
  email: 'sicrano@gmail.com'
```

### Javascript Object Notation (JSON)

![Object](http://json.org/object.gif)

![Value](http://json.org/value.gif)

Reference: [JSON ORG](http://json.org)

#### .json, .js (Quoted)
```js
[
  {
    "name": "fulano",
    "email": "fulano@gmail.com"
  },
  {
    "name": "sicrano",
    "email": "sicrano@gmail.com"
  }
]
```

#### .js (Unquoted)
```js
[
  {
    name: 'fulano',
    email: 'fulano@gmail.com'
  },
  {
    name: 'sicrano',
    email: 'sicrano@gmail.com'
  }
]
```

#### .js (Indexed)

```js
{
  20181234: {
    name: 'fulano',
    email: 'fulano@gmail.com'
  },
  20181235: {
    name: 'sicrano',
    email: 'sicrano@gmail.com'
  }
}
```

References:
* [json.org](http://json.org/)
* [JSON MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/json)


## Web API
---

> APIs: [Any  API](https://any-api.com/), [abhishekbanthia/Public-APIs](https://github.com/abhishekbanthia/Public-APIs), [toddmotto/public-apis](https://github.com/toddmotto/public-apis)

### Via CEP API

Reference: [doc](https://viacep.com.br/)

[https://viacep.com.br/ws/01001000/json/](https://viacep.com.br/ws/01001000/json/):
```js
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "unidade": "",
  "ibge": "3550308",
  "gia": "1004"
}
```

### IP API

Reference: [doc](http://ip-api.com/docs/), [json](http://ip-api.com/docs/api:json)

[http://ip-api.com/json/8.8.8.8](http://ip-api.com/json/8.8.8.8):
```js
{
  "as":"AS15169 Google Inc.",
  "city":"Mountain View",
  "country":"United States",
  "countryCode":"US",
  "isp":"Google",
  "lat":37.4229,"lon":-122.085,"org":"Google",
  "query":"8.8.8.8",
  "region":"CA",
  "regionName":"California",
  "status":"success",
  "timezone":"America/Los_Angeles",
  "zip":""
}
```

### JSONPlaceholder API

Reference: [doc](http://jsonplaceholder.typicode.com/)

[http://jsonplaceholder.typicode.com/posts/](http://jsonplaceholder.typicode.com/posts/):
```js
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  ...
  {
    "userId": 10,
    "id": 100,
    "title": "at nam consequatur ea labore ea harum",
    "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
  }
]
```

<!-- TODO RestFull, Web of Data] -->