# Running Javascript in Browser

* [&lt;script>](#script)
* [onEvents](#onevents)
* [URL (JS)](#url-js)

## &lt;script>
---

### Body

[running-javascript-browser/hello-body.html](running-javascript-browser/hello-body.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Running Javascript</h1>
  <script>
    console.log('Hello World!')
  </script>
</body>
</html>
```

### Body (file.js)

[running-javascript-browser/hello-body-file.html](running-javascript-browser/hello-body-file.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Running Javascript</h1>
  <script src="js/main.js"></script>
</body>
</html>
```

[running-javascript-browser/js/main.js](running-javascript-browser/js/main.js):
```js
console.log('Hello World!')
```

### Head (file.js)

[running-javascript-browser/hello-head-file.html](running-javascript-browser/hello-head-file.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="js/main.js"></script>
</head>
<body>
  <h1>Running Javascript</h1>
</body>
</html>
```

## onEvents
---

[running-javascript-browser/event-print.html](running-javascript-browser/event-print.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Running Javascript</h1>
  <button onclick="window.print()">Print</button>
</body>
</html>
```

## URL (JS)
---

[running-javascript-browser/url-print.html](running-javascript-browser/url-print.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Running Javascript</h1>
  <a href="javascript:window.print()">Print</a>
</body>
</html>
```