# [Bootstrap](https://getbootstrap.com)

## Installation
---

* [CDN](https://www.bootstrapcdn.com)
* [Donwload](https://getbootstrap.com/docs/4.1/getting-started/download/)

## Components
---

* [Modal](https://getbootstrap.com/docs/4.1/components/modal/)
* [Carousel](https://getbootstrap.com/docs/4.1/components/carousel/)
* [Collapse](https://getbootstrap.com/docs/4.1/components/collapse/)
* [Dropdown](https://getbootstrap.com/docs/4.1/components/dropdowns/)
* [Tooltips](https://getbootstrap.com/docs/4.1/components/tooltips/)
* [Scrollspy](https://getbootstrap.com/docs/4.1/components/scrollspy/)

## Source
---

```
bootstrap/bootstrap-sass
├── index.html
├── js
│   └── app.js
└── scss
    └── main.scss
```

[bootstrap/bootstrap-sass/scss/main.scss](bootstrap/bootstrap-sass/scss/main.scss):
```scss
{% include_relative bootstrap/bootstrap-sass/scss/main.scss %}
```

[bootstrap/bootstrap-sass/js/app.js](bootstrap/bootstrap-sass/js/app.js):
```js
{% include_relative bootstrap/bootstrap-sass/js/app.js %}
```

[bootstrap/bootstrap-sass/index.html](bootstrap/bootstrap-sass/index.html):
```html
{% include_relative bootstrap/bootstrap-sass/index.html %}
```

[bootstrap/bootstrap-sass/package.json](bootstrap/bootstrap-sass/package.json):

```
$ npm init -y
$ npm i jquery popper.js bootstrap font-awesome -s
$ npm i webpack webpack-cli @webpack-cli/init -D
```

```js
{% include_relative bootstrap/bootstrap-sass/package.json %}
```

[bootstrap/bootstrap-sass/webpack.dev.js](bootstrap/bootstrap-sass/webpack.dev.js):

```
$ npx webpack init
? Will your application have multiple bundles? No
? Which module will be the first to enter the application? [default: ./src/index] ./js/app.js
? Which folder will your generated bundles be in? [default: dist]:
? Will you be using ES2015? Yes
? Will you use one of the below CSS solutions? SASS
...
Congratulations! Your new webpack configuration file has been created!
```

```
$ npm i extract-loader file-loader -D
$ npm r style-loader -D
```

```js
{% include_relative bootstrap/bootstrap-sass/webpack.dev.js %}
```

```
$ npx webpack --config webpack.dev.js
```

```
$ npm run build-dev
```