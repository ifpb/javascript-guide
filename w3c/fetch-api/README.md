# [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

* [Request HTTP (GET JSON)](#request-http-get-json)
* [Request HTTP (GET JSON Async)](#request-http-get-json-async)
* [Request HTTP (POST JSON, Token)](#request-http-post-json-token)

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

## Request HTTP (GET JSON Async)
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

[get-viacep-json-async/](get-viacep-json-async/):
```js
{% include_relative get-viacep-json-async/js/main.js %}
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

## References

* [Fetch API \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Using Fetch \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)