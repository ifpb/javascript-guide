# [XMLHttpRequest (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

* [Asynchronous JavaScript and XML (AJAX)](#asynchronous-javaScript-and-xml-ajax)
* [Request HTTP (GET XML)](#request-http-get-xml)
* [Request HTTP (GET PIPED)](#request-http-get-piped)
* [Request HTTP (GET JSON)](#request-http-get-json)
* [Request HTTP (GET JSONP)](#request-http-get-jsonp)
* [Request HTTP (POST JSON, Token)](#request-http-post-json-token)
* [Handling Request HTTP](#handling-request-http)

## Asynchronous JavaScript and XML (AJAX)
---

![](https://upload.wikimedia.org/wikipedia/commons/0/0b/Ajax-vergleich-en.svg)<br>
Reference: [Wikipedia](https://en.wikipedia.org/wiki/Ajax_(programming))

Classic web application model (synchronous)<br>
![](http://www.httpdebugger.com/upload/images/classic_model.jpg)<br>
Reference: [HTTP Debug](http://www.httpdebugger.com/articles/introduction_of_ajax.html)

Ajax web application model (asynchronous)<br>
![](http://www.httpdebugger.com/upload/images/async_model.jpg)<br>
Reference: [HTTP Debug](http://www.httpdebugger.com/articles/introduction_of_ajax.html)

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
Access-Control-Allow-Origin: *
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

> No Access-Control-Allow-Origin:<br>
> <b>Safari</b>: Origin http://127.0.0.1:5500 is not allowed by Access-Control-Allow-Origin.<br>
> <b>Chrome</b>: Failed to load https://viacep.com.br/ws/58015430/piped/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:5500' is therefore not allowed access.

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
Access-Control-Allow-Origin: *
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

[get-viacep-jsonp/index.html](relative get-viacep-jsonp/index.html)
```js
{% include_relative get-viacep-jsonp/index.html %}
```

[get-viacep-jsonp/js/main.js](relative get-viacep-jsonp/js/main.js)
```js
{% include_relative get-viacep-jsonp/js/main.js %}
```

## Request HTTP (POST JSON, Token)
---

[SendGrid API V3](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html): [https://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/index.html](https://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/index.html):
```
$ curl --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"personalizations": [{"to": [{"email": "example@example.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]}'
```

```js
{
  "personalizations": [
    {
      "to": [
        { "email": "example@example.com" }
      ]
    }
  ],
  "from": { "email": "example@example.com" },
  "subject": "Hello, World!",
  "content": [
    {
      "type": "text/plain",
      "value": "Heya!"
    }
  ]
}
```

> [SendGrid API Keys - Create API Key](https://app.sendgrid.com/settings/api_keys)

[post-sendgrid-json/](relative post-sendgrid-json/):
```js
{% include_relative post-sendgrid-json/js/main.js %}
```

## Handling Request HTTP
---

[handling-request/](relative handling-request/):
```js
{% include_relative handling-request/js/main.js %}
```

## References
---

* [AJAX \| MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
* [XMLHttpRequest \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [Using XMLHttpRequest \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
* [HTML in XMLHttpRequest \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)