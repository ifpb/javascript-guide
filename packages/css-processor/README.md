# CSS Preprocessor

## SASS
---

```
sass/sass-simple
├── index.html
├── js
│   └── app.js
└── scss
    └── main.scss
```

[sass/sass-simple/scss/main.scss](sass/sass-simple/scss/main.scss):
```scss
{% include_relative sass/sass-simple/scss/main.scss %}
```

[sass/sass-simple/index.html](sass/sass-simple/index.html):
```html
{% include_relative sass/sass-simple/index.html %}
```

[sass/sass-simple/package.json](sass/sass-simple/package.json):

```
$ npm init -y
$ npm i webpack webpack-cli @webpack-cli/init -D
```

```js
{% include_relative sass/sass-simple/package.json %}
```

[sass/sass-simple/webpack.dev.js](sass/sass-simple/webpack.dev.js):

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
{% include_relative sass/sass-simple/webpack.dev.js %}
```

```
$ npx webpack --config webpack.dev.js
```

```
$ npm run build-dev
```

## PostCSS
---

```
postcss/sass-simple
├── index.html
├── js
│   └── app.js
└── scss
    └── main.scss
```

[postcss/postcss-simple/scss/main.scss](postcss/postcss-simple/scss/main.scss):
```scss
{% include_relative postcss/postcss-simple/scss/main.scss %}
```

[postcss/postcss-simple/index.html](postcss/postcss-simple/index.html):
```html
{% include_relative postcss/postcss-simple/index.html %}
```

[postcss/postcss-simple/package.json](postcss/postcss-simple/package.json):

```
$ npm init -y
$ npm i webpack webpack-cli @webpack-cli/init -D
```

```js
{% include_relative postcss/postcss-simple/package.json %}
```

[postcss/postcss-simple/webpack.dev.js](postcss/postcss-simple/webpack.dev.js):

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
$ npm i extract-loader file-loader postcss-loader cssnano autoprefixer -D
$ npm r style-loader -D
```

```js
{% include_relative postcss/postcss-simple/webpack.dev.js %}
```

```
$ npx webpack --config webpack.dev.js
```

```
$ npm run build-dev
```

[postcss/postcss-simple/dist/css/bundle.css](postcss/postcss-simple/dist/css/bundle.css):
```css
{% include_relative postcss/postcss-simple/dist/css/bundle.css %}
```