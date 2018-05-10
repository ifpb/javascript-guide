# [XMLHttpRequest (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

Failed to load https://viacep.com.br/ws/58015430/piped/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:5500' is therefore not allowed access.

## Request HTTP (GET XML)
---

[ViaCEP API](https://viacep.com.br/): [https://viacep.com.br/ws/58015430/xml/](https://viacep.com.br/ws/58015430/xml/)
```
$ curl -i https://viacep.com.br/ws/58015430/xml/
HTTP/1.1 200 OK
Server: nginx/1.12.2
Date: Thu, 10 May 2018 19:36:06 GMT
Content-Type: application/xhtml+xml
Transfer-Encoding: chunked
Connection: keep-alive
<b>Access-Control-Allow-Origin: *</b>
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Content-Type, X-Request-With, X-Requested-By
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400
Expires: Thu, 10 May 2018 20:36:06 GMT
Cache-Control: max-age=3600
Cache-Control: public

<?xml version="1.0" encoding="UTF-8"?>
<xmlcep>
  <cep>58015-430</cep>
  <logradouro>Avenida Primeiro de Maio</logradouro>
  <complemento>até 469/470</complemento>
  <bairro>Jaguaribe</bairro>
  <localidade>João Pessoa</localidade>
  <uf>PB</uf>
  <unidade></unidade>
  <ibge>2507507</ibge>
  <gia></gia>
</xmlcep>
```

[get-viacep-xml/](get-viacep-xml/):
```js
{% include_relative get-viacep-xml/js/main.js %}
```

> [vscode: Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Request HTTP (GET PIPED)
---

[ViaCEP API](https://viacep.com.br/): [https://viacep.com.br/ws/58015430/piped/](https://viacep.com.br/ws/58015430/piped/)
```
$ curl -i https://viacep.com.br/ws/58015430/piped/
HTTP/1.1 200 OK
Server: nginx/1.12.2
Date: Thu, 10 May 2018 19:29:38 GMT
Content-Type: text/plain; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
Vary: Accept-Encoding
Expires: Thu, 10 May 2018 20:29:38 GMT
Cache-Control: max-age=3600
Cache-Control: public

cep:58015-430|logradouro:Avenida Primeiro de Maio|complemento:até 469/470|bairro:Jaguaribe|localidade:João Pessoa|uf:PB|unidade:|ibge:2507507|gia:
```

[get-viacep-piped/](get-viacep-piped/):
```js
{% include_relative get-viacep-piped/js/main.js %}
```

> No Access-Control-Allow-Origin:
> <b>Safari<b>: Origin http://127.0.0.1:5500 is not allowed by Access-Control-Allow-Origin.<br>
> <b>Chrome<b>: Failed to load https://viacep.com.br/ws/58015430/piped/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:5500' is therefore not allowed access.

## Request HTTP (GET JSON)
---

[ViaCEP API](https://viacep.com.br/): [https://viacep.com.br/ws/58015430/json/](https://viacep.com.br/ws/58015430/json/)
```
$ curl -i https://viacep.com.br/ws/58015430/json/
HTTP/1.1 200 OK
Server: nginx/1.12.2
Date: Thu, 10 May 2018 19:27:14 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
<b>Access-Control-Allow-Origin: *</b>
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Content-Type, X-Request-With, X-Requested-By
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400
Expires: Thu, 10 May 2018 20:27:14 GMT
Cache-Control: max-age=3600
Cache-Control: public

{
  "cep": "58015-430",
  "logradouro": "Avenida Primeiro de Maio",
  "complemento": "até 469/470",
  "bairro": "Jaguaribe",
  "localidade": "João Pessoa",
  "uf": "PB",
  "unidade": "",
  "ibge": "2507507",
  "gia": ""
}
```

[get-viacep-json/](get-viacep-json/):
```js
{% include_relative get-viacep-json/js/main.js %}
```

## Request HTTP (GET JSONP)
---

[ViaCEP API](https://viacep.com.br/): [https://viacep.com.br/ws/58015430/json/?callback=showContent](https://viacep.com.br/ws/58015430/json/?callback=showContent)
```
$ curl -i https://viacep.com.br/ws/58015430/json/?callback=showContent
HTTP/1.1 200 OK
Server: nginx/1.12.2
Date: Thu, 10 May 2018 19:52:54 GMT
Content-Type: application/javascript; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
Vary: Accept-Encoding
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Content-Type, X-Request-With, X-Requested-By
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400
Expires: Thu, 10 May 2018 20:52:54 GMT
Cache-Control: max-age=3600
Cache-Control: public

showContent({
  "cep": "58015-430",
  "logradouro": "Avenida Primeiro de Maio",
  "complemento": "até 469/470",
  "bairro": "Jaguaribe",
  "localidade": "João Pessoa",
  "uf": "PB",
  "unidade": "",
  "ibge": "2507507",
  "gia": ""
});%
```

[get-viacep-jsonp/](relative get-viacep-jsonp/)
```js
{% include_relative get-viacep-jsonp/js/main.js %}
```

## Request HTTP (POST JSON)
---

## Request HTTP (Token)
---

## Handling Request HTTP
---

[handling-request/](relative handling-request/):
```js
{% include_relative handling-request/js/main.js %}
```

## References
---

* [XMLHttpRequest \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [Using XMLHttpRequest \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
* [AJAX \| MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
* [HTML in XMLHttpRequest \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)